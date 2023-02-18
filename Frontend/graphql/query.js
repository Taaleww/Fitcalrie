import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
    query user($input: Int!)
    {
        user(id: $input){
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