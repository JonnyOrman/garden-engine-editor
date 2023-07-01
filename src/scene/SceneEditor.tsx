import React from 'react';
import Scene from './Scene';
import DimensionEditor from '../fields/dimension/DimensionEditor';
import { useValidatedChangeHandler } from '../fields/useValidatedChangeHandler';
import Component from '../components/Component';

export const SceneEditor = (props: { onChange: (newValue: Scene) => void }) => {
  const [handleChange, value, error] = useValidatedChangeHandler<Scene>(
    'Scale',
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
    <Component>
      <DimensionEditor dimension="Width" onChange={onWidthChange} />
      <DimensionEditor dimension="Height" onChange={onHeightChange} />
      {error && <span>{error}</span>}
    </Component>
  );
};
