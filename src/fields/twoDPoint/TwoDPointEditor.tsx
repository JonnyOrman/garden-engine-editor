import Form from 'react-bootstrap/Form';
import React from 'react';
import TwoDPoint from './TwoDPoint';
import Editor from '../Editor';
import ValidatedFieldProps from '../ValidatedFieldProps';

export default class SceneDimension extends Editor<TwoDPoint> {
  constructor(props: ValidatedFieldProps<TwoDPoint>) {
    super(props, {
      x: 0,
      y: 0,
    });
  }

  onXValueChange = (newXValue: number) => {
    const newPoint = {
      x: newXValue,
      y: this.value.y,
    };
    this.changeValue(newPoint);
  };

  onYValueChange = (newYValue: number) => {
    const newPoint = {
      x: this.value.x,
      y: newYValue,
    };
    this.changeValue(newPoint);
  };

  render = () => {
    return (
      <div>
        <Form.Group>
          <Form.Label>Position X:</Form.Label>
          <Form.Control
            id="position-x"
            type="number"
            onChange={(e) => this.onXValueChange(+e.currentTarget.value)}
          ></Form.Control>
          <Form.Label>Position Y:</Form.Label>
          <Form.Control
            id="position-y"
            type="number"
            onChange={(e) => this.onYValueChange(+e.currentTarget.value)}
          ></Form.Control>
        </Form.Group>
      </div>
    );
  };
}
