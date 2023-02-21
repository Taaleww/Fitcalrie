import {gql} from '@apollo/client';

export const CREATE_USER = gql`
  mutation ($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      username
      password
      gender
      dateOfbirth
      height
      weight
      BMI
      frq_excercise
      goal
    }
  }
`;

export const LOGIN = gql`
  mutation login($loginUserInput: LoginUserInput!) {
    login(loginUserInput: $loginUserInput) {
      access_token
      user {
        _id
        username
        password
        gender
        dateOfbirth
        height
        weight
        BMI
        frq_excercise
        goal
      }
    }
  }
`;
