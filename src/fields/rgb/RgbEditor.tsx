import React from 'react';
import Rgb from './Rgb';
import RgbValueEditor from './RgbValueEditor';
import EditorProps from '../EditorProps';
import { useValidatedPropertyChangeHandler } from '../useValidatedPropertyChangeHandler';
import ValidatedField from '../ValidatedField';

export const RgbEditor = (props: EditorProps<Rgb>) => {
  const [handleChange, value, error] = useValidatedPropertyChangeHandler<
    Rgb,
    number
  >('Rgb', props.onChange, {
    r: 0,
    g: 0,
    b: 0,
  });

  const onRValueChange = (newRValue: number) => {
    handleChange(newRValue, (newRValue: number) => {
      return {
        r: newRValue,
        g: value.g,
        b: value.b,
      };
    });
  };

  const onGValueChange = (newGValue: number) => {
    handleChange(newGValue, (newGValue: number) => {
      return {
        r: value.r,
        g: newGValue,
        b: value.b,
      };
    });
  };

  const onBValueChange = (newBValue: number) => {
    handleChange(newBValue, (newBValue: number) => {
      return {
        r: value.r,
        g: value.g,
        b: newBValue,
      };
    });
  };

  return (
    <ValidatedField name={'RGB'} value={value} error={error}>
      <RgbValueEditor name={'R'} onChange={onRValueChange} />
      <RgbValueEditor name={'G'} onChange={onGValueChange} />
      <RgbValueEditor name={'B'} onChange={onBValueChange} />
    </ValidatedField>
  );
};

export default RgbEditor;
