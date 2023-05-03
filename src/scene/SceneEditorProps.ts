import Props from '../fields/Props';
import ValidatedFieldProps from '../fields/ValidatedFieldProps';
import Scene from './Scene';

export default interface SceneEditorPros extends ValidatedFieldProps<Scene> {
  sceneDimensionProps: Props<number>;
}
