const { ApolloServer, gql } = require('apollo-server');
const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');


const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const { JWT_SECRET } = process.env;

const prisma = new PrismaClient();



const getUserFromToken = async (token) => {
	if (!token) return null;

	const tokenData = jwt.verify(token, JWT_SECRET);

	if (!tokenData?.id) return null;

	const user = await prisma.user.findUnique({
		where: {id: tokenData.id}
	});
	return user;
}

const start = async () => {

	const server = new ApolloServer({ typeDefs, resolvers });

	server.listen().then(({ url }) => {
		console.log(`🚀  Server ready at ${url}`);
	});


}


start();
