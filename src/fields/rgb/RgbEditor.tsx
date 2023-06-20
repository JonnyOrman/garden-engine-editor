import React from 'react';
import Rgb from './Rgb';
import RgbValueEditor from './RgbValueEditor';
import { useValidatedChangeHandler } from '../useValidatedChangeHandler';

export const RgbEditor = (props: { onChange: (value: Rgb) => void }) => {
  const [handleChange, value, error] = useValidatedChangeHandler<Rgb>(
    'Rgb',
    props.onChange,
    {
      r: 0,
      g: 0,
      b: 0,
    }
  );

  const onRValueChange = (newRValue: number) => {
    const newRgb = {
      r: newRValue,
      g: value.g,
      b: value.b,
    };
    handleChange(newRgb);
  };

  const onGValueChange = (newGValue: number) => {
    const newRgb = {
      r: value.r,
      g: newGValue,
      b: value.b,
    };
    handleChange(newRgb);
  };

  const onBValueChange = (newBValue: number) => {
    const newRgb = {
      r: value.r,
      g: value.g,
      b: newBValue,
    };
    handleChange(newRgb);
  };

  return (
    <div>
      <RgbValueEditor name={'R'} onChange={onRValueChange}></RgbValueEditor>
      <RgbValueEditor name={'G'} onChange={onGValueChange}></RgbValueEditor>
      <RgbValueEditor name={'B'} onChange={onBValueChange}></RgbValueEditor>
      {error && <span>{error}</span>}
    </div>
  );
};

export default RgbEditor;
