import React from 'react';
import TwoDPoint from './TwoDPoint';
import DimensionEditor from '../dimension/DimensionEditor';
import { usePropertyChangeHandler } from '../usePropertyChangeHandler';
import EditorProps from '../EditorProps';
import { Field } from '../Field';

export const TwoDPointEditor = (props: EditorProps<TwoDPoint>) => {
  const defaultValue = {
    x: 0,
    y: 0,
  };

  const [handleChange, value] = usePropertyChangeHandler<TwoDPoint, number>(
    'Two2PointEditor',
    props.onChange,
    defaultValue
  );

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
    <Field name="2D Point" value={value}>
      <DimensionEditor
        onChange={onXValueChange}
        dimension="X"
      ></DimensionEditor>
      <DimensionEditor
        onChange={onYValueChange}
        dimension="Y"
      ></DimensionEditor>
    </Field>
  );
};

export default TwoDPointEditor;
