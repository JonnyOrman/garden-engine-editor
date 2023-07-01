import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1({});

export const Header1 = ({ text }: { text: string }) => {
  return <H1>{text}</H1>;
};

export default Header1;
