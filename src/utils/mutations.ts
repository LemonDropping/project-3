import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
        token
        user{
          _id
        }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
      $userName: String! 
      $email: String! 
      $password: String! 
      $firstName: String! 
      $lastName: String!
      ) {
        addUser(
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
            userName: $userName
    ) {
      token
      user {
        _id
        }
      }
    }
`;