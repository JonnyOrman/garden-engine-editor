import React from 'react';
import styled from 'styled-components';
import Component from '../components/Component';

const ModalBackground = styled(Component)({
  position: 'fixed',
  backgroundColor: 'black',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  opacity: 0.5,
  //div: {},
});

export default ModalBackground;
