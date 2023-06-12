import Form from 'react-bootstrap/Form';
import React from 'react';
import Rgb from './Rgb';
import Editor from '../Editor';
import ValidatedFieldProps from '../ValidatedFieldProps';

export default class RgbEditor extends Editor<Rgb> {
  constructor(props: ValidatedFieldProps<Rgb>) {
    super(props, {
      r: 0,
      g: 0,
      b: 0,
    });
  }

  onRValueChange = (newRValue: number) => {
    const newRgb = {
      r: newRValue,
      g: this.value.g,
      b: this.value.b,
    };
    this.changeValue(newRgb);
  };

  onGValueChange = (newGValue: number) => {
    const newRgb = {
      r: this.value.r,
      g: newGValue,
      b: this.value.b,
    };
    this.changeValue(newRgb);
  };

  onBValueChange = (newBValue: number) => {
    const newRgb = {
      r: this.value.r,
      g: this.value.g,
      b: newBValue,
    };
    this.changeValue(newRgb);
  };

  render = () => {
    return (
      <div>
        <Form.Label>R:</Form.Label>
        <Form.Control
          id="r"
          type="number"
          onChange={(e) => this.onRValueChange(+e.currentTarget.value)}
        ></Form.Control>
        <Form.Label>G:</Form.Label>
        <Form.Control
          id="g"
          type="number"
          onChange={(e) => this.onGValueChange(+e.currentTarget.value)}
        ></Form.Control>
        <Form.Label>B:</Form.Label>
        <Form.Control
          id="b"
          type="number"
          onChange={(e) => this.onBValueChange(+e.currentTarget.value)}
        ></Form.Control>
      </div>
    );
  };
}
