import React from 'react';
import { useValidatedChangeHandler } from '../useValidatedChangeHandler';
import EditorProps from '../EditorProps';
import Error from '../../errors/Error';

export const ScaleEditor = (props: EditorProps<number>) => {
  const [handleChange, value, error] = useValidatedChangeHandler<number>(
    'Scale',
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
        />
      </label>
      <Error error={error} />
    </div>
  );
};

export default ScaleEditor;
