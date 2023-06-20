import React from 'react';
import Form from 'react-bootstrap/Form';
import Scene from './Scene';
import DimensionEditor from '../fields/dimension/DimensionEditor';
import { useValidatedChangeHandler } from '../fields/useValidatedChangeHandler';

export const SceneEditor = (props: { onChange: (newValue: Scene) => void }) => {
  const [handleChange, value, error] = useValidatedChangeHandler<Scene>(
    'scale',
    props.onChange,
    {
      width: 0,
      height: 0,
    }
  );

  const onWidthChange = (newWidth: number) => {
    const newScene = {
      width: newWidth,
      height: value.height,
    };
    handleChange(newScene);
  };

  const onHeightChange = (newHeight: number) => {
    const newScene = {
      width: value.width,
      height: newHeight,
    };
    handleChange(newScene);
  };

  return (
    <Form.Group>
      <DimensionEditor dimension="Width" onChange={onWidthChange} />
      <DimensionEditor dimension="Height" onChange={onHeightChange} />
      {error && <span>{error}</span>}
    </Form.Group>
  );
};
