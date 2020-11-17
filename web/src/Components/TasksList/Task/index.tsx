import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

import trashIcon from '../../../assets/delete-icon.svg';

import TaskModal from '../../TaskModal/index'
import { TaskInterface } from '../../../types';

import { TaskContainer } from './styles';


const REMOVE_ITEM = gql`
  mutation deleteTask($id: ID!) {
    deleteTask(id: $id)
  }
`;

const GET_TASKS = gql`
  query getTasks {
    tasks {
      _id
      title
      description
      status
    }
  }
`;

// user useContext pra quando o usuario clicar em apagar, executar um query pra retornar todos as tasks


const Task = ({_id, title, description, status}: TaskInterface) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const [deleteTask] = useMutation(REMOVE_ITEM, {
    refetchQueries: () =>[{query: GET_TASKS}]
  });
  
  return (
    <>
      <TaskContainer
        style={{ 
          background: 
            status === 'To Do' 
            ? '#FFCFAE' 
            : status === 'Doing'
            ? '#FEEFA7' : '#D6FCAD'
        }}
        >
        <p
         onClick={() => setShowModal(!showModal)}
         >{title}</p>
        <img 
          src={trashIcon} 
          alt="Icon to delete a task"
          onClick={() => deleteTask({variables: {id: _id}})}
        />
      </TaskContainer>
      {
        showModal ? (
          <TaskModal
            isOpen={showModal}
            _id={_id}
            title={title}
            description={description}
            status={status}
          />
          ) : null
      }
    </>
  )
}

export default Task;
