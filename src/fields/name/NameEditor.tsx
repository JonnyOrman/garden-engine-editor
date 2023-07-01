import React from 'react';
import { useValidatedChangeHandler } from '../useValidatedChangeHandler';
import EditorProps from '../EditorProps';
import { TextEditor } from '../TextEditor';
import ValidatedField from '../ValidatedField';

export const NameEditor = (props: EditorProps<string>) => {
  const [handleChange, value, error] = useValidatedChangeHandler<string>(
    'Name',
    props.onChange,
    ''
  );

  return (
    <ValidatedField
      name="Name"
      renderEditor={() => <TextEditor onChange={handleChange} />}
      value={value}
      error={error}
    />
  );
};

export default NameEditor;
