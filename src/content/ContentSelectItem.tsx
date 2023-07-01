import React from 'react';
import { Button } from '../buttons/Button';
import Modal from '../modals/Modal';
import Window from '../windows/Window';
import Component from '../components/Component';
import styled from 'styled-components';

const Body = styled.div({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
});

export const ContentSelectItem = ({
  object,
  onClick,
  show,
  onClose,
}: {
  object: any;
  onClick: () => void;
  show: boolean;
  onClose: () => void;
}) => {
  return (
    <React.Fragment>
      <Button onClick={onClick} text={object.name} />
      <Modal
        show={show}
        renderContent={() => (
          <Window
            content={() => {
              return (
                <Component>
                  <Body>{object.name}</Body>
                </Component>
              );
            }}
            closeWindow={onClose}
          />
        )}
      />
    </React.Fragment>
  );
};

export default ContentSelectItem;
