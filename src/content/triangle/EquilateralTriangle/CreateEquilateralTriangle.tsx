import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CreateContentProps from '../../CreateContentProps';
import NameEditor from '../../../fields/name/NameEditor';
import DimensionEditor from '../../../fields/dimension/DimensionEditor';
import EquilateralTriangle from './EquilateralTriangle';
import { useEquilateralTriangleSubmitter } from './useEquilateralTriangleSubmitter';

export default function CreateEquilateralTriangle(props: CreateContentProps) {
  const equilateralTriangleSubmitter = useEquilateralTriangleSubmitter();

  const [equilateralTriangle, setEquilateralTriangle] = useState<EquilateralTriangle>({
    name: '',
    type: 'EquilateralTriangle',
    size: 0
  });

  const onNameValueChange = (newNameValue: string) => {
    setEquilateralTriangle({
      name: newNameValue,
    type: equilateralTriangle.type,
    size: equilateralTriangle.size
    });
  };

  const onSizeValueChange = (newSizeValue: number) => {
    setEquilateralTriangle({
      name: equilateralTriangle.name,
    type: equilateralTriangle.type,
    size: newSizeValue,
    });
  };

  const submit = async (e: any) => {
    equilateralTriangleSubmitter.submit(equilateralTriangle, e, props.onHide);
  };

  return (
    <Form onSubmit={submit}>
      <NameEditor onChange={onNameValueChange}></NameEditor>
      <Form.Group>
        <DimensionEditor dimension='size' onChange={onSizeValueChange}></DimensionEditor>
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
    </Form>
  );
  }
