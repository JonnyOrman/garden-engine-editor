import Form from 'react-bootstrap/Form';
import React from 'react';
import TwoDPoint from './TwoDPoint';
import DimensionEditor from '../dimension/DimensionEditor';
import { useValidatedChangeHandler } from '../useValidatedChangeHandler';

export const TwoDPointEditor = (props: {
  onChange: (newValue: TwoDPoint) => void;
}) => {
  const [handleChange, value, error] = useValidatedChangeHandler<TwoDPoint>(
    'TwoPointEditor',
    props.onChange,
    {
      x: 0,
      y: 0,
    }
  );

  const onXValueChange = (newXValue: number) => {
    const newPoint = {
      x: newXValue,
      y: value.y,
    };
    handleChange(newPoint);
  };

  const onYValueChange = (newYValue: number) => {
    const newPoint = {
      x: value.x,
      y: newYValue,
    };
    handleChange(newPoint);
  };

  return (
    <div>
      <Form.Group>
        <DimensionEditor
          onChange={onXValueChange}
          dimension="X"
        ></DimensionEditor>
        <DimensionEditor
          onChange={onYValueChange}
          dimension="Y"
        ></DimensionEditor>
      </Form.Group>
      {error && <span>{error}</span>}
    </div>
  );
};

export default TwoDPointEditor;
