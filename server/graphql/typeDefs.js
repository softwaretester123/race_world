const { gql } = require('apollo-server');

const typeDefs = gql`
	type User {
		id: String
		name: String
		email: String
		password: String
		contact: String
		address: String
	}

	type AuthUser {
		token: String
		user: User
	}

	type Query {
		users: [User]
	}

	type Mutation {
		signUp(
			name: String!
			email: String!
			password: String!
			address: String!
			contact: String!
		): AuthUser!
		signIn(email: String!, password: String!): AuthUser!
		updateUser(
			id: String!
			email: String!
			name: String!
			contact: String!
			address: String!
		): User!
		changePassword(id:String!, password: String!, newPassword: String!): User!
	}
`;

module.exports = typeDefs;
