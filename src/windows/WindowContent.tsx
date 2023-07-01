import React from 'react';
import Component from '../components/Component';
import styled from 'styled-components';

const WindowComponent = styled(Component)({});

export const WindowContent = ({
  content,
}: {
  content: () => React.ReactNode;
}) => {
  return <WindowComponent>{content()}</WindowComponent>;
};

export default WindowContent;
