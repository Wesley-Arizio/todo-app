import React, {useState, FormEvent} from 'react';

import { useMutation } from '@apollo/client';
import { GET_TASKS } from '../../graphql/query/index'
import { CREATE_TASK } from '../../graphql/mutation/index';

import { Container, Button, ContainerStatus } from './styles';

type Status = 'To Do' | 'Doing' | 'Done';

const CreateTask: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<Status>('To Do');

  const [createTask] = useMutation(CREATE_TASK,{
    refetchQueries: () =>[{query: GET_TASKS}]
  });

  const cleanState = () => {
    setTitle('')
    setDescription('')
    setStatus('To Do')
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    createTask({
      variables: {
        title,
        description,
        status
      }
    });
    cleanState();
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="task-title" 
          placeholder="Adicionar Atividade"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea 
          cols={100} 
          rows={5}
          placeholder="Descrição da atividade"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <ContainerStatus>
          <label htmlFor="">
            <input 
              type="radio" 
              name="action"
              checked={status === 'To Do' ? true : false}
              onChange={() => setStatus('To Do')}
            />
            <span>To Do</span>
          </label>
          <label htmlFor="">
            <input 
              type="radio" 
              name="action" 
              onChange={() => setStatus('Doing')} 
            />
            <span>Doing</span>
          </label>
          <label htmlFor="">
            <input 
              type="radio" 
              name="action" 
              onChange={() => setStatus('Done')} 
            />
            <span>Done</span>
          </label>
        </ContainerStatus>
        <Button>
          Adicionar Atividades
        </Button>
      </form>
    </Container>
  );
};

export default CreateTask;
