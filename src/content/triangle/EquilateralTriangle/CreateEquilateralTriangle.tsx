import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CreateContentProps from '../../CreateContentProps';
import NameEditor from '../../../fields/name/NameEditor';
import DimensionEditor from '../../../fields/dimension/DimensionEditor';
import EquilateralTriangle from './EquilateralTriangle';
import { useEquilateralTriangleSubmitter } from './useEquilateralTriangleSubmitter';
import { useSubmitter } from '../../useSubmitter';

export default function CreateEquilateralTriangle(props: CreateContentProps) {
  const [submit, handleChange, value] = useSubmitter<EquilateralTriangle>({
      name: '',
      type: 'EquilateralTriangle',
      size: 0
    },
    useEquilateralTriangleSubmitter(),
  () => {});

  const onNameValueChange = (newNameValue: string) => {
    handleChange<string>(newNameValue, (newNameValue: string) => {
      return {
        name: newNameValue,
        type: value.type,
        size: value.size
      }
    });
  };

  const onSizeValueChange = (newSizeValue: number) => {
    handleChange<number>(newSizeValue, (newSizeValue: number) => {
      return {
        name: value.name,
        type: value.type,
        size: newSizeValue,
      }
    });
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
