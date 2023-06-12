import React from 'react';
import Form from 'react-bootstrap/Form';
import ValidatedFieldProps from '../ValidatedFieldProps';
import Editor from '../Editor';

export default class NameEditor extends Editor<string> {
  constructor(props: ValidatedFieldProps<string>) {
    super(props, '');
  }

  render = () => {
    return (
      <Form.Group>
        <Form.Label>Name:</Form.Label>
        <Form.Control
          id="name"
          type="text"
          onChange={(e) => this.changeValue(e.currentTarget.value)}
        />
        {this.error && <span>{this.error}</span>}
      </Form.Group>
    );
  };
}
