import React from 'react';

import { useQuery } from '@apollo/client';
import { GET_TASKS } from '../../graphql/query/index'

import { TaskInterface } from '../../types';

import Task from './Task';

import { Container } from './styles';


const TasksList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_TASKS);

    if(loading) {
      return <p>Loading...</p>
    }
    
    if(error || !data) {
      return <p>Error...</p>
    }

  return (
    <Container>
      {
        data.tasks.map((item: TaskInterface) => (
          <Task 
            _id={item._id}
            key={item._id}
            title={item.title} 
            description={item.description}
            status={item.status} 
          />
        ))
      }
    </Container>
  );
};

export default TasksList;
