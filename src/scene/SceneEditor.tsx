import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import SceneDimension from '../fields/SceneDimension';
import Scene from './Scene';
import SceneEditorProps from './SceneEditorProps';

function EditScene(props: SceneEditorProps) {
  const [value, setValue] = useState<Scene>({ width: 0, height: 0 });
  const [error, setError] = useState<string | null>(null);

  const onWidthChange = (newWidth: number) => {
    const newScene = {
      width: newWidth,
      height: value.height,
    };
    onValueChange(newScene);
  };

  const onHeightChange = (newHeight: number) => {
    const newScene = {
      width: value.width,
      height: newHeight,
    };
    onValueChange(newScene);
  };

  const onValueChange = (newValue: Scene) => {
    props.props.onChangeHandler.handle(
      newValue,
      setError,
      setValue,
      props.onChange
    );
  };

  return (
    <Form.Group>
      <SceneDimension
        dimension="Width"
        onChange={onWidthChange}
        props={props.sceneDimensionProps}
      />
      <SceneDimension
        dimension="Height"
        onChange={onHeightChange}
        props={props.sceneDimensionProps}
      />
      ;
    </Form.Group>
  );
}

export default EditScene;
