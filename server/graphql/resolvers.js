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
	password: Joi.string().alphanum().min(3).required(),
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
		signUp: async (_, { name, email, password }) => {
			try {
				const { value, error } = await userSchema.validate({
					name,
					email,
					password,
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
					},
				});

				return { token: getToken(user), user };
			} catch (e) {
				e = e.message.replace(/"/g, '');
				throw new UserInputError('Bad Input', { error: e });
			}
		},

		signIn: async (_, {email, password}) => {
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
				throw new UserInputError('Bad Input', { error: e });
			}
		}
	},
};

module.exports = resolvers;
