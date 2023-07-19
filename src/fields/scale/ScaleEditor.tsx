import React from 'react';
import { useValidatedChangeHandler } from '../useValidatedChangeHandler';
import EditorProps from '../EditorProps';
import ValidatedField from '../ValidatedField';
import NumberEditor from '../NumberEditor';

export const ScaleEditor = (props: EditorProps<number>) => {
  const [handleChange, value, error] = useValidatedChangeHandler<number>(
    'Scale',
    props.onChange,
    0
  );

  return (
    <ValidatedField name="Scale" value={value} error={error}>
      <NumberEditor onChange={handleChange} />
    </ValidatedField>
  );
};

export default ScaleEditor;
