import Form from 'react-bootstrap/Form';
import React from 'react';
import TwoDPoint from './TwoDPoint';
import DimensionEditor from '../dimension/DimensionEditor';
import { useValidatedPropertyChangeHandler } from '../useValidatedPropertyChangeHandler';
import EditorProps from '../EditorProps';

export const TwoDPointEditor = (props: EditorProps<TwoDPoint>) => {
  const [handleChange, value, error] = useValidatedPropertyChangeHandler<
    TwoDPoint,
    number
  >('TwoPointEditor', props.onChange, {
    x: 0,
    y: 0,
  });

  const onXValueChange = (newXValue: number) => {
    handleChange(newXValue, (newXValue: number) => {
      return {
        x: newXValue,
        y: value.y,
      };
    });
  };

  const onYValueChange = (newYValue: number) => {
    handleChange(newYValue, (newYValue: number) => {
      return {
        x: value.x,
        y: newYValue,
      };
    });
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
