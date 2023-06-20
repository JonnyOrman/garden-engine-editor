import React from 'react';
import Form from 'react-bootstrap/Form';
import { useValidatedChangeHandler } from '../useValidatedChangeHandler';

export const NameEditor = (props: { onChange: (newValue: string) => void }) => {
  const [handleChange, value, error] = useValidatedChangeHandler<string>(
    'Name',
    props.onChange,
    ''
  );

  return (
    <Form.Group>
      <Form.Label>Name:</Form.Label>
      <Form.Control
        id="name"
        type="text"
        onChange={(e) => handleChange(e.currentTarget.value)}
      />
      {error && <span>{error}</span>}
    </Form.Group>
  );
};

export default NameEditor;
