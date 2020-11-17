import { gql } from '@apollo/client';

export const GET_TASKS = gql`
    query getTasks {
    tasks {
        _id
        title
        description
        status
    }
}
`;