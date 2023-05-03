import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import React from 'react';
import ValidatedFieldProps from './ValidatedFieldProps';

function Name(props: ValidatedFieldProps<string>) {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onValueChange = (newValue: string) => {
    props.props.onChangeHandler.handle(
      newValue,
      setError,
      setValue,
      props.onChange
    );
  };

  return (
    <Form.Group>
      <Form.Label>Name:</Form.Label>
      <Form.Control
        id="name"
        type="text"
        onChange={(e) => onValueChange(e.currentTarget.value)}
      />
      {error && <span>{error}</span>}
    </Form.Group>
  );
}

export default Name;
