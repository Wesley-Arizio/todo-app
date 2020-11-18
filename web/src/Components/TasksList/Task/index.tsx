import React, { useEffect, useState } from 'react';

import { useMutation } from '@apollo/client';
import { GET_TASKS } from '../../../graphql/query/index'
import { REMOVE_ITEM } from '../../../graphql/mutation/index';


import trashIcon from '../../../assets/delete-icon.svg';
import editIcon from '../../../assets/edit-icon.svg';

import TaskModal from '../../TaskModal/index'
import { TaskInterface } from '../../../types';

import { TaskContainer } from './styles';
import TaskEditModal from '../../TaskEditModal';


const Task = ({_id, title, description, status}: TaskInterface) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showEditModal, setShowEditModal] = useState<boolean>(false)

  const [deleteTask] = useMutation(REMOVE_ITEM, {
    refetchQueries: () =>[{query: GET_TASKS}]
  });

  function closeModal(){
    setShowModal(!showModal)
  }

  function closeModalEdit(){
    setShowEditModal(!showEditModal)
  }

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
          src={editIcon} 
          alt="Icon to edit a task"
          onClick={() => setShowEditModal(!showEditModal)}
        />
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
            closeModal={closeModal}
          />
          ) : null
      }
      {
        showEditModal ? (
          <TaskEditModal
            closeModal={closeModalEdit}
            isOpen={showEditModal}
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
