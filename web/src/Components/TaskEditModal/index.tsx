import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { GET_TASKS } from '../../graphql/query/index'
import { UPDATE_TASK } from '../../graphql/mutation/index';

import { 
  Container,
  Modal,
  ContainerButtonClose,
  Form,
  Label,
  ContainerStatus,
  Button
} from './styles';

import closeIcon from '../../assets/close-icon.svg';

import { TaskInterface } from '../../types';
import { FormEvent } from 'react';

interface Props extends TaskInterface{
  isOpen: boolean
} 

const TaskEditModal = ({ isOpen, _id, title, description, status }: Props) => {
  const [showModal, setShowModal] = useState(isOpen);

  const [updateTask] = useMutation(UPDATE_TASK ,{
    refetchQueries: () =>[{query: GET_TASKS}]
  });

  const [task, setTask] = useState<TaskInterface>({
    _id,
    title,
    description,
    status
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    updateTask({
      variables: {
          id: _id,
          title: task.title,
          description: task.description,
          status: task.status
      }
    });

    setTask({
      _id: '',
      title: '',
      description: '',
      status: ''
    });

    setShowModal(!showModal)
  }

  if(showModal) {
    return (
      <Container id="modal-container">
      <Modal>
        <ContainerButtonClose>
          <img 
            src={closeIcon} 
            alt="X icon to close modal"
            onClick={() => setShowModal(!showModal)}
            />
        </ContainerButtonClose>
        <Form onSubmit={handleSubmit}>
          <Label>
            Title
            <input 
              type="text"
              value={task.title}
              onChange={(event) => { 
                setTask({
                  ...task, 
                  title: event.target.value
                });
              }}
              placeholder={task.title}
            ></input>
          </Label>

          <Label>
            Description
            <textarea 
              cols={50} 
              rows={5}
              value={task.description}
              onChange={(event) => {
                setTask({
                  ...task, 
                  description: event.target.value
                });
              }}
              placeholder={task.description}
            ></textarea>
          </Label>

          <ContainerStatus>
          <label htmlFor="">
            <input 
              type="radio" 
              name="action"
              checked={task.status === 'To Do' ? true : false}
              onChange={() => setTask({
                ...task,
                status: 'To Do'
              })}
            />
            <span>To Do</span>
          </label>
          <label htmlFor="">
            <input 
              type="radio" 
              name="action"
              checked={task.status === 'Doing' ? true : false} 
              onChange={() => setTask({
                ...task,
                status: 'Doing'
              })} 
            />
            <span>Doing</span>
          </label>
          <label htmlFor="">
            <input 
              type="radio" 
              checked={task.status === 'Done' ? true : false}
              name="action" 
              onChange={() => setTask({
                ...task,
                status: 'Done'
              })} 
            />
            <span>Done</span>
          </label>
        </ContainerStatus>
        <Button>
          Atualizar Atividade
        </Button>
        </Form>
      </Modal>
    </Container>
    )
  }else {
    return null
  }
};

export default TaskEditModal;
