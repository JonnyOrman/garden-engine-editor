import React from 'react';

export const PrimaryButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default PrimaryButton;
