import React from 'react';
import { useValidatedChangeHandler } from '../useValidatedChangeHandler';
import RgbValueEditorProps from './RgbValueEditorProps';

export const RgbValueEditor = (props: RgbValueEditorProps) => {
  const [handleChange, value, error] = useValidatedChangeHandler<number>(
    'RgbValue',
    props.onChange,
    0
  );

  return (
    <div>
      <label>
        {props.name}
        <input
          type="number"
          onChange={(e) => handleChange(+e.currentTarget.value)}
        ></input>
      </label>
      {error && <span>{error}</span>}
    </div>
  );
};

export default RgbValueEditor;
