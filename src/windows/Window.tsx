import React from 'react';
import Toolbar from './Toolbar';
import { VerticalComponent } from '../components/VerticalComponent';
import WindowContent from './WindowContent';
import styled from 'styled-components';

const WindowComponent = styled(VerticalComponent)({
  backgroundColor: '#2f2f2f',
});

export const Window = ({
  content,
  closeWindow,
}: {
  content: () => React.ReactNode;
  closeWindow: () => void;
}) => {
  return (
    <WindowComponent>
      <Toolbar closeWindow={closeWindow} />
      <WindowContent content={content} />
    </WindowComponent>
  );
};

export default Window;
