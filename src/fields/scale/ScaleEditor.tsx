import Form from 'react-bootstrap/Form';
import React from 'react';
import { useValidatedChangeHandler } from '../useValidatedChangeHandler';
import EditorProps from '../EditorProps';

export const ScaleEditor = (props: EditorProps<number>) => {
  const [handleChange, value, error] = useValidatedChangeHandler<number>(
    'scale',
    props.onChange,
    0
  );

  return (
    <Form.Group>
      <Form.Label>Scale:</Form.Label>
      <Form.Control
        id="scale"
        type="number"
        onChange={(e) => handleChange(+e.currentTarget.value)}
      ></Form.Control>
      {error && <span>{error}</span>}
    </Form.Group>
  );
};

export default ScaleEditor;
