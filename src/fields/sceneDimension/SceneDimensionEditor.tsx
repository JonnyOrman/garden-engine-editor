import Form from 'react-bootstrap/Form';
import SceneDimensionProps from './SceneDimensionProps';
import React from 'react';
import { EditorB } from '../Editor';

export default class SceneDimensionEditor extends EditorB<
  number,
  SceneDimensionProps
> {
  constructor(props: SceneDimensionProps) {
    super(props, 0);
  }

  render = () => {
    return (
      <Form.Group>
        <Form.Label>Scene {this.props.dimension}:</Form.Label>
        <Form.Control
          id="scene-${props.dimension}"
          type="number"
          onChange={(e) => this.changeValue(+e.currentTarget.value)}
        />
        {this.error && <span>{this.error}</span>}
      </Form.Group>
    );
  };
}
