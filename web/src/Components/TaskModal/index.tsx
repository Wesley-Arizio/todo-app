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
  isOpen: boolean,
  closeModal(): void
} 

const TaskModal = ({ isOpen, _id, title, description, status, closeModal }: Props) => {
  const [showModal, setShowModal] = useState(isOpen);
  const currentColor = 
    status === 'To Do' 
      ? '#FFCFAE'
      : status === 'Doing' 
      ? '#FEEFA7'
      : '#D6FCAD'
  

  if(showModal) {
    return (
      <Container id="modal-container">
      <Modal>
        <ContainerButtonClose>
          <StatusCircle>
            <div
              className="circle-status"
              style={{ 
                background: currentColor
              }}

            ></div>
            <p
              style={{ 
                color: currentColor
              }}
            >{status}</p>
          </StatusCircle>
          <img 
            src={closeIcon} 
            alt="X icon to close modal"
            onClick={() => closeModal()}
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
