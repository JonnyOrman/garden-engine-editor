import React from 'react';
import Form from 'react-bootstrap/Form';
import Scene from './Scene';
import SceneEditorProps from './SceneEditorProps';
import SceneDimensionEditor from '../fields/sceneDimension/SceneDimensionEditor';
import { EditorB } from '../fields/Editor';

export default class SceneDimension extends EditorB<Scene, SceneEditorProps> {
  constructor(props: SceneEditorProps) {
    super(props, {
      width: 0,
      height: 0,
    });
  }

  onWidthChange = (newWidth: number) => {
    const newScene = {
      width: newWidth,
      height: this.value.height,
    };
    this.changeValue(newScene);
  };

  onHeightChange = (newHeight: number) => {
    const newScene = {
      width: this.value.width,
      height: newHeight,
    };
    this.changeValue(newScene);
  };

  render() {
    return (
      <Form.Group>
        <SceneDimensionEditor
          dimension="Width"
          onChange={this.onWidthChange}
          props={this.props.sceneDimensionProps}
        />
        <SceneDimensionEditor
          dimension="Height"
          onChange={this.onHeightChange}
          props={this.props.sceneDimensionProps}
        />
        ;
      </Form.Group>
    );
  }
}
