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
    <div>
      <label>
        Scale
        <input
          type="number"
          onChange={(e) => handleChange(+e.currentTarget.value)}
        ></input>
      </label>
      {error && <span>{error}</span>}
    </div>
  );
};

export default ScaleEditor;
