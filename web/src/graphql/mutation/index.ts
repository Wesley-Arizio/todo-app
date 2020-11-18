import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
    mutation createTask(
        $title: String!
        $description: String!
        $status: String!
    ){
        createTask( data: {
            title: $title,
            description: $description,
            status: $status
        }){
            _id
        }
    }
`;

export const UPDATE_TASK = gql`
    mutation updateTask(
        $id: ID!
        $title: String!
        $description: String!
        $status: String!
    ){
    updateTask(
        id: $id,
        data: {
            title: $title,
            description: $description,
            status: $status
        }){
            _id
        }
    }
`;

export const REMOVE_ITEM = gql`
    mutation deleteTask($id: ID!) {
        deleteTask(id: $id)
    }
`;
