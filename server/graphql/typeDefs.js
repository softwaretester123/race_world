const { gql } = require('apollo-server');

const typeDefs = gql`
	type User {
		id: String
		name: String
		email: String
		password: String
	}

	type AuthUser {
		token: String
		user: User
	}

	type Query {
		users: [User]
	}

	type Mutation {
		signUp(name: String!, email: String!, password: String!): AuthUser!
		signIn(email: String!, password: String!): AuthUser
	}
`;

module.exports = typeDefs;
