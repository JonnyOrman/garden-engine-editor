import React from 'react';
import { Label } from './Label';
import styled from 'styled-components';

const FieldRow = styled.div({
  width: '100%',
  display: 'flex',
  gap: '24px',
  label: {
    width: '250px',
    textAlign: 'right',
  },
  input: {
    flexGrow: 1,
  },
});

export const Field = <T,>({
  name,
  renderEditor,
  value,
}: {
  name: string;
  renderEditor: (value: T) => React.ReactNode;
  value: T;
}) => {
  return (
    <FieldRow>
      <Label>{name}</Label>
      {renderEditor(value)}
    </FieldRow>
  );
};
