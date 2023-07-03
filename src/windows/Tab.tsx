import React from 'react';
import styled from 'styled-components';

const TabButton = styled.button({
  width: '100px',
  fontSize: '8px',
});

export const Tab = ({
  name,
  onClick,
}: {
  name: string;
  onClick: () => void;
}) => {
  return <TabButton onClick={onClick}>{name}</TabButton>;
};

export default Tab;
