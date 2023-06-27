import React from 'react';
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
    <form onSubmit={submit}>
      <NameEditor onChange={onNameValueChange}></NameEditor>
      <div>
        <DimensionEditor dimension='size' onChange={onSizeValueChange}></DimensionEditor>
      </div>
      <input type="submit">
        Create
      </input>
    </form>
  );
  }
