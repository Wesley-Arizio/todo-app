import React from 'react';

import { Container, Card } from './styles';

import TasksList from '../../Components/TasksList/index';
import CreateTask from '../../Components/CreateTask/index';

const Main: React.FC = () => {
  return (
    <Container>
      <Card>
        <CreateTask />
        <TasksList />
      </Card>
    </Container>
  );
};

export default Main;
