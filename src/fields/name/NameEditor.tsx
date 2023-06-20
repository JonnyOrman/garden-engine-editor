import React from 'react';
import Form from 'react-bootstrap/Form';
import { useValidatedChangeHandler } from '../useValidatedChangeHandler';
import EditorProps from '../EditorProps';

export const NameEditor = (props: EditorProps<string>) => {
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
