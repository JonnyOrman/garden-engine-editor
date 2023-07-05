import React from 'react';
import { useValidatedChangeHandler } from '../useValidatedChangeHandler';
import DimensionEditorProps from './DimensionEditorProps';
import ValidatedField from '../ValidatedField';
import NumberEditor from '../NumberEditor';

export const DimensionEditor = (props: DimensionEditorProps) => {
  const [handleChange, value, error] = useValidatedChangeHandler<number>(
    'Dimension',
    props.onChange,
    0
  );

  return (
    <ValidatedField name={props.dimension} value={value} error={error}>
      <NumberEditor onChange={handleChange} />
    </ValidatedField>
  );
};

export default DimensionEditor;
