import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import React from 'react';
import ValidatedFieldProps from './ValidatedFieldProps';
import TwoDPoint from './TwoDPoint';

function TwoDPointEditor(props: ValidatedFieldProps<TwoDPoint>) {
  const [value, setValue] = useState<TwoDPoint>({
    x: 0,
    y: 0,
  });
  const [error, setError] = useState<string | null>(null);

  const onXValueChange = (newXValue: number) => {
    const newPoint = {
      x: newXValue,
      y: value.y,
    };
    onValueChange(newPoint);
  };

  const onYValueChange = (newYValue: number) => {
    const newPoint = {
      x: value.x,
      y: newYValue,
    };
    onValueChange(newPoint);
  };

  const onValueChange = (newValue: TwoDPoint) => {
    props.props.onChangeHandler.handle(
      newValue,
      setError,
      setValue,
      props.onChange
    );
  };

  return (
    <div>
      <Form.Group>
        <Form.Label>Position X:</Form.Label>
        <Form.Control
          id="position-x"
          type="number"
          onChange={(e) => onXValueChange(+e.currentTarget.value)}
        ></Form.Control>
        <Form.Label>Position Y:</Form.Label>
        <Form.Control
          id="position-y"
          type="number"
          onChange={(e) => onYValueChange(+e.currentTarget.value)}
        ></Form.Control>
      </Form.Group>
    </div>
  );
}

export default TwoDPointEditor;
