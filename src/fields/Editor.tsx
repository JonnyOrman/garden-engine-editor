import React from 'react';
import ValidatedFieldProps from './ValidatedFieldProps';

export class EditorB<
  T,
  TProps extends ValidatedFieldProps<T>
> extends React.Component<TProps> {
  protected value: T;
  protected error: string | null;

  constructor(props: TProps, defaultValue: T) {
    super(props);
    this.value = defaultValue;
    this.error = null;
  }

  changeValue = (value: T) => {
    this.value = value;
    this.props.props.onChangeHandler.handle(value, this.props.onChange);
  };
}

export default class Editor<T> extends EditorB<T, ValidatedFieldProps<T>> {
  constructor(props: ValidatedFieldProps<T>, defaultValue: T) {
    super(props, defaultValue);
    this.error = null;
  }

  changeValue = (value: T) => {
    this.value = value;
    this.props.props.onChangeHandler.handle(value, this.props.onChange);
  };
}
