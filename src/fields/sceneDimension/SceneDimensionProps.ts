import ValidatedFieldProps from '../ValidatedFieldProps';

export default interface SceneDimensionProps
  extends ValidatedFieldProps<number> {
  dimension: string;
}
