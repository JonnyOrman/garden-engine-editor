import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import ValidatedFieldProps from './ValidatedFieldProps';
import Rgb from './Rgb';

function RgbEditor(props: ValidatedFieldProps<Rgb>) {
  const [value, setValue] = useState<Rgb>({
    r: 0,
    g: 0,
    b: 0,
  });
  const [error, setError] = useState<string | null>(null);

  const onRValueChange = (newRValue: number) => {
    const newRgb = {
      r: newRValue,
      g: value.g,
      b: value.b,
    };
    onValueChange(newRgb);
  };

  const onGValueChange = (newGValue: number) => {
    const newRgb = {
      r: value.r,
      g: newGValue,
      b: value.b,
    };
    onValueChange(newRgb);
  };

  const onBValueChange = (newBValue: number) => {
    const newRgb = {
      r: value.r,
      g: value.g,
      b: newBValue,
    };
    onValueChange(newRgb);
  };

  const onValueChange = (newValue: Rgb) => {
    props.props.onChangeHandler.handle(
      newValue,
      setError,
      setValue,
      props.onChange
    );
  };

  return (
    <div>
      <Form.Control
        id="r"
        type="number"
        onChange={(e) => onRValueChange(+e.currentTarget.value)}
      ></Form.Control>
      <Form.Label>G:</Form.Label>
      <Form.Control
        id="g"
        type="number"
        onChange={(e) => onGValueChange(+e.currentTarget.value)}
      ></Form.Control>
      <Form.Label>B:</Form.Label>
      <Form.Control
        id="b"
        type="number"
        onChange={(e) => onBValueChange(+e.currentTarget.value)}
      ></Form.Control>
    </div>
  );
}

export default RgbEditor;
