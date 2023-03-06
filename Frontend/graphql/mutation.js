import {gql} from '@apollo/client';

export const CREATE_USER = gql`
  mutation ($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      username
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

export const UPDATE_USER = gql`
  mutation updateUser($updateUserInput: UpdateUserInput!) {
    updateUser(updateUserInput: $updateUserInput) {
      username
      gender
      dateOfbirth
      height
      weight
      BMI
      goal
    }
  }
`;

export const ADD_FOOD = gql`
  mutation createNutritionOfUser(
    $createNutritionOfUserInput: CreateNutritionOfUserInput!
  ) {
    createNutritionOfUser(
      createNutritionOfUserInput: $createNutritionOfUserInput
    ) {
      total_calorie
      servingSize
    }
  }
`;

export const DELTE_FOOD = gql`
  mutation removeNutritionOfUser($delete: String!) {
    removeNutritionOfUser(delete: $delete)
  }
`;
