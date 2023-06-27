import React from 'react';
import { FullWidthComponent } from '../components/FullWidthComponent';
import { Error } from '../errors/Error';
import { Field } from './Field';

export const ValidatedField = <T,>({
  name,
  renderEditor,
  value,
  error,
}: {
  name: string;
  renderEditor: (value: T) => React.ReactNode;
  value: T;
  error: string | null;
}) => {
  return (
    <FullWidthComponent>
      <Field name={name} renderEditor={renderEditor} value={value} />
      {error && <Error error={error} />}
    </FullWidthComponent>
  );
};

export default ValidatedField;
