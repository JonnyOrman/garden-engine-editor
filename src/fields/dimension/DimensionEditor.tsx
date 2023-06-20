import Form from 'react-bootstrap/Form';
import React from 'react';
import { useValidatedChangeHandler } from '../useValidatedChangeHandler';
import DimensionEditorProps from './DimensionEditorProps';

export const DimensionEditor = (props: DimensionEditorProps) => {
  const [handleChange, value, error] = useValidatedChangeHandler<number>(
    'Dimension',
    props.onChange,
    0
  );

  return (
    <Form.Group>
      <Form.Label>{props.dimension}:</Form.Label>
      <Form.Control
        id="scene-${props.dimension}"
        type="number"
        onChange={(e) => handleChange(+e.currentTarget.value)}
      />
      {error && <span>{error}</span>}
    </Form.Group>
  );
};

export default DimensionEditor;
