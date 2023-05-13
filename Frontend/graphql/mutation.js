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
      calorieOfUser
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
        calorieOfUser
      }
    }
  }
`;

// export const LOGIN = gql`
//   mutation {
//     login(loginUserInput: {username: "testtest67", password: "123123123"}) {
//       access_token
//       user {
//         _id
//         username
//       }
//     }
//   }
// `;

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
      calorieOfUser
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

export const ADD_EXERCISE = gql`
  mutation createExerciseOfUser(
    $createExerciseOfUserInput: CreateExerciseOfUserInput!
  ) {
    createExerciseOfUser(
      createExerciseOfUserInput: $createExerciseOfUserInput
    ) {
      total_calories_burned
    }
  }
`;

export const ADD_RUNNING = gql`
  mutation createRunningUser($createRunningUser: CreateRunInput!) {
    createRunningUser(createRunningUser: $createRunningUser) {
      total_calories_burned
    }
  }
`;

export const DELETE_EXERCISE = gql`
  mutation removeExerciseOfUser($delete: String!) {
    removeExerciseOfUser(delete: $delete)
  }
`;

export const FIND_TOTALCAL = gql`
  mutation createTotalCal($createTotalCal: CreateShowInput!) {
    createTotalCal(createTotalCal: $createTotalCal) {
      total_calories_burned
    }
  }
`;
