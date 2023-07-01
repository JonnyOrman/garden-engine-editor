import React from 'react';
import ButtonElement from '../buttons/ButtonElement';

export const Submit = ({ text }: { text: string }) => {
  return <ButtonElement type="submit">{text}</ButtonElement>;
};
