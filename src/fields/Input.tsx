import React from 'react';
import styled from 'styled-components';

const Container = styled.input({
  borderRadius: 0,
});

export const Input = <T,>({
  type,
  onChange,
  castValue,
}: {
  type: string;
  onChange: (newValue: T) => void;
  castValue: (value: string) => T;
}) => {
  return (
    <Container
      type={type}
      onChange={(e) => onChange(castValue(e.currentTarget.value))}
    />
  );
};
