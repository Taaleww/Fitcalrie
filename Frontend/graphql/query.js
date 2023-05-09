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
      calorieOfUser
    }
  }
`;

export const NUTRITION = gql`
  query nutrition($id: String!) {
    nutrition(id: $id) {
      name
      calories
      protein
      carbohydrate
      fat
      vitaminc
    }
  }
`;

export const FIND_NUTRITION = gql`
  query findList($date: DateTime!, $userId: String!) {
    findList(date: $date, userId: $userId) {
      _id
      total_calorie
      nutritionId {
        _id
        name
        calories
        protein
        carbohydrate
        fat
        vitaminc
      }
      servingSize
      date
      weightOfUser
    }
  }
`;

export const FIND_EXERCISE = gql`
  query findExList($date: DateTime!, $userId: String!) {
    findExList(date: $date, userId: $userId) {
      _id
      exerciseId {
        _id
        name
        total_calorie_burned
      }
      total_calories_burned
      time
    }
  }
`;

export const SEARCH_FOOD = gql`
  query findFood($Food: String!) {
    findFood(Food: $Food) {
      _id
      name
      calories
    }
  }
`;

export const SEARCH_EXERCISE = gql`
  query findEx($Exercise: String!) {
    findEx(Exercise: $Exercise) {
      _id
      name
      total_calorie_burned
    }
  }
`;

export const SEARCH_FOOD_MONTH = gql`
  query findListByMonth($date: DateTime!, $userId: String!) {
    findListByMonth(date: $date, userId: $userId) {
      date
    }
  }
`;

export const SEARCH_EXERCISE_MONTH = gql`
  query findExListByMonth($date: DateTime!, $userId: String!) {
    findExListByMonth(date: $date, userId: $userId) {
      date
    }
  }
`;

export const RECOMMENDATIONS = gql`
  query model($userId: String!) {
    model(userId: $userId) {
      _id
      name
      calories
    }
  }
`;
