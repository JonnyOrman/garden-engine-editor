import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import SceneDimensionProps from './SceneDimensionProps';
import React from 'react';

function SceneDimension(props: SceneDimensionProps) {
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
      <Form.Label>Scene {props.dimension}:</Form.Label>
      <Form.Control
        id="scene-${props.dimension}"
        type="number"
        onChange={(e) => onValueChange(+e.currentTarget.value)}
      />
      {error && <span>{error}</span>}
    </Form.Group>
  );
}

export default SceneDimension;
