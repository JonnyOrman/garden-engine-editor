import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Submit } from './Submit';
import { Error } from '../errors/Error';

const FormComponent = styled.form({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  width: '100%',
  height: '100%',
  boxSizing: 'border-box',
  padding: '0 15px',
  div: {
    width: '100%',
  },
});

const FormFields = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '12px',
});

const FormFooter = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

export const Form = <T,>({
  buildValue,
  onSubmit,
  defaultValue,
  fieldRenderers,
  dependencies,
}: {
  buildValue: () => T;
  onSubmit: (value: T, e: any) => void;
  defaultValue: T;
  fieldRenderers: (() => React.ReactNode)[];
  dependencies?: React.DependencyList | undefined;
}) => {
  const [value, setValue] = useState<T>(defaultValue);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const value = buildValue();

    setValue(value);
  }, dependencies);

  const submit = async (e: any) => {
    onSubmit(value, e);
  };

  return (
    <FormComponent onSubmit={submit}>
      <FormFields>
        {fieldRenderers.map((fieldRenderer) => {
          return fieldRenderer();
        })}
      </FormFields>
      <FormFooter>
        <Submit text="Create" />
        <Error error={error}></Error>
      </FormFooter>
    </FormComponent>
  );
};

export default Form;
