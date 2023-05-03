import ValidatedFieldProps from '../fields/ValidatedFieldProps';

export default interface SceneDimensionProps
  extends ValidatedFieldProps<number> {
  dimension: string;
}
