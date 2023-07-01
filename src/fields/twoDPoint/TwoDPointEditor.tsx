import React from 'react';
import TwoDPoint from './TwoDPoint';
import DimensionEditor from '../dimension/DimensionEditor';
import { usePropertyChangeHandler } from '../usePropertyChangeHandler';
import EditorProps from '../EditorProps';

export const TwoDPointEditor = (props: EditorProps<TwoDPoint>) => {
  const [handleChange, value] = usePropertyChangeHandler<TwoDPoint, number>(
    'Two2PointEditor',
    props.onChange,
    {
      x: 0,
      y: 0,
    }
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
    <div>
      <DimensionEditor
        onChange={onXValueChange}
        dimension="X"
      ></DimensionEditor>
      <DimensionEditor
        onChange={onYValueChange}
        dimension="Y"
      ></DimensionEditor>
    </div>
  );
};

export default TwoDPointEditor;
