import React, {useState, FormEvent} from 'react';
import { gql, useMutation } from '@apollo/client';

import { Container, Button, ContainerStatus } from './styles';

type Status = 'To Do' | 'Doing' | 'Done';

const CREATE_TASK = gql`
  mutation createTask(
    $title: String!
    $description: String!
    $status: String!
  ){
    createTask(data: {
      title: $title,
      description: $description,
      status: $status
    }) { 
      title
      description
      status
    }
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
