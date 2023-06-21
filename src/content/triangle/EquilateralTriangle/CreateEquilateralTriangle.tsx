import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CreateContentProps from '../../CreateContentProps';
import NameEditor from '../../../fields/name/NameEditor';
import DimensionEditor from '../../../fields/dimension/DimensionEditor';
import { EquilateralTriangleWriterContext } from './EquilateralTriangleWriterContext';

export default function CreateEquilateralTriangle(props: CreateContentProps) {
    const equilateralTriangleWriter = useContext(EquilateralTriangleWriterContext);

  const [name, setName] = useState('');

  const [size, setSize] = useState(0);

  const submit = async (e: any) => {
    e.preventDefault();

    await equilateralTriangleWriter.write({
      name: name,
      type: 'equilateralTriangle',
      size: size
    });

    props.onHide();
  };

  return (
    <Form onSubmit={submit}>
      <NameEditor onChange={setName}></NameEditor>
      <Form.Group>
        <DimensionEditor dimension='size' onChange={setSize}></DimensionEditor>
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
  }
