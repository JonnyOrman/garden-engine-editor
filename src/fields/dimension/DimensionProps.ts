import ValidatedFieldProps from '../ValidatedFieldProps';

export default interface DimensionProps extends ValidatedFieldProps<number> {
  dimension: string;
}
