import React from 'react';
import { FullWidthComponent } from '../components/FullWidthComponent';
import { Error } from '../errors/Error';
import { Field } from './Field';

export const ValidatedField = <T,>({
  name,
  value,
  error,
  children,
}: {
  name: string;
  value: T;
  error: string | null;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <FullWidthComponent>
      <Field name={name} value={value}>
        {children}
      </Field>
      <Error error={error} />
    </FullWidthComponent>
  );
};

export default ValidatedField;
