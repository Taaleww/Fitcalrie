import {gql} from '@apollo/client';

export const FINDUSER = gql`
  query findUser($username: String!) {
    findUser(username: $username) {
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
`;
