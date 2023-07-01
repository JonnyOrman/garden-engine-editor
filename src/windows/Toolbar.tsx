import React from 'react';
import styled from 'styled-components';
import { FullWidthComponent } from '../components/FullWidthComponent';
import ToolbarButton from './ToolbarButton';

const Container = styled(FullWidthComponent)({
  height: '25px',
  display: 'flex',
  justifyContent: 'flex-end',
});

export const Toolbar = ({ closeWindow }: { closeWindow: () => void }) => {
  return (
    <Container>
      <ToolbarButton onClick={closeWindow} />
    </Container>
  );
};

export default Toolbar;
