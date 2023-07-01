import React from 'react';
import NameEditor from '../../../fields/name/NameEditor';
import DimensionEditor from '../../../fields/dimension/DimensionEditor';
import EquilateralTriangle from './EquilateralTriangle';
import { useEquilateralTriangleSubmitter } from './useEquilateralTriangleSubmitter';
import { useSubmitter } from '../../useSubmitter';
import Form from '../../../forms/Form';

export default function CreateEquilateralTriangle() {
  const [submit, handleChange, value] = useSubmitter<EquilateralTriangle>(
    {
      name: '',
      type: 'EquilateralTriangle',
      size: 0,
    },
    useEquilateralTriangleSubmitter(),
    () => {}
  );

  const onNameValueChange = (newNameValue: string) => {
    handleChange<string>(newNameValue, (newNameValue: string) => {
      return {
        name: newNameValue,
        type: value.type,
        size: value.size,
      };
    });
  };

  const onSizeValueChange = (newSizeValue: number) => {
    handleChange<number>(newSizeValue, (newSizeValue: number) => {
      return {
        name: value.name,
        type: value.type,
        size: newSizeValue,
      };
    });
  };

  const buildValue = () => {
    return {
      name: value.name,
      type: value.type,
      size: value.size,
    };
  };

  const onSubmit = (equilateralTriangle: EquilateralTriangle, e: any) => {
    submit(e);
  };

  const defaultValue = {
    name: '',
    type: 'EquilateralTriangle',
    size: 0,
  };

  const fieldRenderers = [
    () => <NameEditor onChange={onNameValueChange} key="name" />,
    () => (
      <DimensionEditor
        dimension="size"
        onChange={onSizeValueChange}
        key="scene"
      />
    ),
  ];

  return (
    <Form
      buildValue={buildValue}
      onSubmit={onSubmit}
      defaultValue={defaultValue}
      fieldRenderers={fieldRenderers}
      dependencies={[]}
    ></Form>
  );
}
