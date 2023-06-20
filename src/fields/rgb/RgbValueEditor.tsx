import Form from 'react-bootstrap/Form';
import React from 'react';
import { useValidatedChangeHandler } from '../useValidatedChangeHandler';

export const RgbValueEditor = (props: {
  name: string;
  onChange: (value: number) => void;
}) => {
  const [handleChange, value, error] = useValidatedChangeHandler<number>(
    'RgbValue',
    props.onChange,
    0
  );

  return (
    <div>
      <Form.Label>{props.name}:</Form.Label>
      <Form.Control
        id={props.name}
        type="number"
        onChange={(e) => handleChange(+e.currentTarget.value)}
      ></Form.Control>
      {error && <span>{error}</span>}
    </div>
  );
};

export default RgbValueEditor;
