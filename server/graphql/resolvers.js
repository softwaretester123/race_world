const { PrismaClient } = require('@prisma/client');
const { UserInputError } = require('apollo-server');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

const userSchema = Joi.object({
	name: Joi.string().min(3).required(),
	email: Joi.string()
		.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
		.required(),
	password: Joi.string().min(3).required(),
	address: Joi.string().required().min(15),
	contact: Joi.string().required().min(10).max(10),
});

const userUpdateSchema = Joi.object({
	name: Joi.string().min(3).required(),
	email: Joi.string()
		.email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
		.required(),
	contact: Joi.string().required().min(10).max(10),
	address: Joi.string().required().min(15),
});

const getToken = (user) =>
	jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '7d' });

const resolvers = {
	Query: {
		users: () => {
			return [];
		},
	},
	Mutation: {
		signUp: async (_, { name, email, password, address, contact }) => {
			try {
				const { value, error } = await userSchema.validate({
					name,
					email,
					password,
					address,
					contact,
				});

				if (error) {
					throw new Error(error.details[0].message);
				}

				const existingUser = await prisma.user.findUnique({
					where: { email },
				});

				if (existingUser) {
					throw new Error('User already exists');
				}

				const hashedPassword = await bcrypt.hash(password, 10);

				const user = await prisma.user.create({
					data: {
						name,
						email,
						password: hashedPassword,
						contact,
						address,
					},
				});

				return { token: getToken(user), user };
			} catch (e) {
				e = e.message.replace(/"/g, '');
				throw new UserInputError(e, { error: e });
			}
		},

		signIn: async (_, { email, password }) => {
			try {
				const user = await prisma.user.findUnique({
					where: { email },
				});

				if (!user) {
					throw new Error('User not found');
				}

				const valid = await bcrypt.compare(password, user.password);

				if (!valid) {
					throw new Error('Invalid password');
				}

				return { token: getToken(user), user };
			} catch (e) {
				e = e.message.replace(/"/g, '');
				throw new UserInputError(e, { error: e });
			}
		},

		updateUser: async (_, { id, email, name, contact, address }) => {
			try {
				const { value, error } = userUpdateSchema.validate({
					name,
					email,
					address,
					contact,
				});

				if (error) {
					throw new Error(error.details[0].message);
				}

				const oldUser = await prisma.user.findUnique({
					where: { id },
				});

				if (!oldUser) {
					throw new Error('User not found');
				}

				const otherEmailExists = await prisma.user.findMany({
					where: {
						email,
						NOT: { id },
					},
				});

				if (otherEmailExists.length > 0) {
					throw new Error('Email already exists');
				}

				const updatedUser = await prisma.user.update({
					where: { id },
					data: { name, email, contact, address },
				});

				return updatedUser;
			} catch (e) {
				e = e.message.replace(/"/g, '');
				throw new UserInputError(e, { error: e });
			}
		},

		changePassword: async (_, {id, password, newPassword}) => {
			try {
				const user = await prisma.user.findUnique({where: {id}});
				
				const valid = await bcrypt.compare(password, user.password);

				if (!valid) {
					throw new Error('Invalid password');
				}

				const hashedPassword = await bcrypt.hash(newPassword, 10);

				const updatedUser = await prisma.user.update({
					where: { id },
					data: { password: hashedPassword },
				});

				return updatedUser;
			} catch (e) {
				e = e.message.replace(/"/g, '');
				throw new UserInputError(e, { error: e });
			}
		},
	},
};

module.exports = resolvers;
