import Form from 'react-bootstrap/Form';
import React from 'react';
import Editor from '../Editor';
import ValidatedFieldProps from '../ValidatedFieldProps';

export default class ScaleEditor extends Editor<number> {
  constructor(props: ValidatedFieldProps<number>) {
    super(props, 0);
  }

  render = () => {
    return (
      <Form.Group>
        <Form.Label>Scale:</Form.Label>
        <Form.Control
          id="scale"
          type="number"
          onChange={(e) => this.changeValue(+e.currentTarget.value)}
        ></Form.Control>
      </Form.Group>
    );
  };
}
