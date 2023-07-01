import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Component from '../components/Component';
import ModalBackground from './ModalBackground';

const ModalContainer = styled(Component)({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

const ModalContent = styled.div({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '80%',
});

export const Modal = ({
  show,
  renderContent,
}: {
  show: boolean;
  renderContent: () => ReactNode;
}) => {
  if (show) {
    return (
      <ModalContainer>
        <ModalBackground />
        <ModalContent>{renderContent()}</ModalContent>
      </ModalContainer>
    );
  }

  return null;
};

export default Modal;
