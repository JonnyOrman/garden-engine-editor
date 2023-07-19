import React from 'react';
import { useValidatedChangeHandler } from '../useValidatedChangeHandler';
import RgbValueEditorProps from './RgbValueEditorProps';
import ValidatedField from '../ValidatedField';
import NumberEditor from '../NumberEditor';

export const RgbValueEditor = (props: RgbValueEditorProps) => {
  const [handleChange, value, error] = useValidatedChangeHandler<number>(
    'RgbValue',
    props.onChange,
    0
  );

  return (
    <ValidatedField name={props.name} value={value} error={error}>
      <NumberEditor onChange={handleChange} />
    </ValidatedField>
  );
};

export default RgbValueEditor;
