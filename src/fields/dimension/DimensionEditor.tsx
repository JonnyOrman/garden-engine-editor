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
    <div>
      <label>
        {props.dimension}
        <input
          type="number"
          onChange={(e) => handleChange(+e.currentTarget.value)}
        ></input>
      </label>
      {error && <span>{error}</span>}
    </div>
  );
};

export default DimensionEditor;
