import React from 'react';
import ButtonElement from './ButtonElement';

export const Button = ({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) => {
  return <ButtonElement onClick={onClick}>{text}</ButtonElement>;
};
