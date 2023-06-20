import React from 'react';
import { useValidatedChangeHandler } from '../useValidatedChangeHandler';
import EditorProps from '../EditorProps';

export const NameEditor = (props: EditorProps<string>) => {
  const [handleChange, value, error] = useValidatedChangeHandler<string>(
    'Name',
    props.onChange,
    ''
  );

  return (
    <div>
      <label>
        Name
        <input
          type="text"
          onChange={(e) => handleChange(e.currentTarget.value)}
        ></input>
      </label>
      {error && <span>{error}</span>}
    </div>
  );
};

export default NameEditor;
