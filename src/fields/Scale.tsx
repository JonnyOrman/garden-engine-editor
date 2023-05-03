import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import React from 'react';
import ValidatedFieldProps from './ValidatedFieldProps';

function Scale(props: ValidatedFieldProps<number>) {
  const [value, setValue] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const onValueChange = (newValue: number) => {
    props.props.onChangeHandler.handle(
      newValue,
      setError,
      setValue,
      props.onChange
    );
  };

  return (
    <Form.Group>
      <Form.Label>Scale:</Form.Label>
      <Form.Control
        id="scale"
        type="number"
        onChange={(e) => onValueChange(+e.currentTarget.value)}
      ></Form.Control>
    </Form.Group>
  );
}

export default Scale;
