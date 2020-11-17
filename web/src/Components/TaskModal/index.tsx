import React, { useState } from 'react';

import { 
  Container,
  Modal,
  ContainerButtonClose,
  TitleContainer,
  TextSupport,
  DescriptionContainer,
  StatusCircle
} from './styles';

import closeIcon from '../../assets/close-icon.svg';

import { TaskInterface } from '../../types';

interface Props extends TaskInterface{
  isOpen: boolean
} 

const TaskModal = ({ isOpen, _id, title, description, status }: Props) => {
  const [showModal, setShowModal] = useState(isOpen);

  if(showModal) {
    return (
      <Container id="modal-container">
      <Modal>
        <ContainerButtonClose>
          <StatusCircle>
            <div
              className="circle-status"
              style={{ 
                background: 
                  status === 'To Do' 
                  ? '#FFCFAE' 
                  : status === 'Doing'
                  ? '#FEEFA7' : '#D6FCAD'
              }}

            ></div>
            <p>{status}</p>
          </StatusCircle>
          <img 
            src={closeIcon} 
            alt="X icon to close modal"
            onClick={() => setShowModal(!showModal)}
            />
        </ContainerButtonClose>

        <TextSupport>Atividade</TextSupport>
        <TitleContainer>
          <span></span>
          <h1>{title}</h1>
        </TitleContainer>

        <TextSupport>Descrição</TextSupport>
        <DescriptionContainer>
          <p>{description}</p>
        </DescriptionContainer>
      </Modal>
    </Container>
    )
  }else {
    return null
  }
};

export default TaskModal;
