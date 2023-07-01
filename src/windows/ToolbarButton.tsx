import React from 'react';
import styled from 'styled-components';
import { Button } from '../buttons/Button';

const ToolbarButtonContainer = styled(Button)({
  width: '25px',
  height: '25px',
});

export const ToolbarButton = ({ onClick }: { onClick: () => void }) => {
  return <ToolbarButtonContainer onClick={onClick} text="" />;
};

export default ToolbarButton;
