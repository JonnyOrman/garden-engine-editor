import React from 'react';
import { Button } from './Button';

export const PrimaryButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return <Button onClick={onClick} text={text} />;
};

export default PrimaryButton;
