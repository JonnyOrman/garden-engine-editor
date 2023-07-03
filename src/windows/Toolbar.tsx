import React from 'react';
import styled from 'styled-components';
import { FullWidthComponent } from '../components/FullWidthComponent';
import ToolbarButton from './ToolbarButton';
import useTabCreator from './useTabCreator';

const Container = styled(FullWidthComponent)({
  height: '25px',
  display: 'flex',
  justifyContent: 'flex-end',
});

export const Toolbar = ({
  windowName,
  closeWindow,
}: {
  windowName: string;
  closeWindow: () => void;
}) => {
  const tabCreator = useTabCreator();

  const minimiseWindow = () => {
    tabCreator.create(windowName);
    closeWindow();
  };

  return (
    <Container>
      <ToolbarButton onClick={minimiseWindow} />
      <ToolbarButton onClick={closeWindow} />
    </Container>
  );
};

export default Toolbar;
