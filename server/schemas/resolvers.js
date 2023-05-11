const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { userName }) => {
            return User.findOne({ userName });
        },
    },

    Mutation: {
       addUser: async (parent, {userName, email, password, firstName, lastName }) => {
        const user = await User.create({ userName, email, password, firstName, lastName });
        const token = signToken(user);
        return { token, user };
       },
       login: async (parent, { userName, password }) => {
        const user = await User.findOne({ userName });

        if (!user) {
            throw new AuthenticationError('No user found with this username');
        }

        const correctPw = await user.isCorrectPassword(password);

        if (!correctPw) {
            throw new AuthenticationError('Incorrect password');
        }

        const token = signToken(user);

        return { token, user};
       } 
    }
};

module.exports = resolvers;