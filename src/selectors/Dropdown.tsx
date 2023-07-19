import React from 'react';
import { DropdownSelectItem } from './DropdownSelectItem';
import SelectItem from './SelectItem';
import styled from 'styled-components';

const SelectElement = styled.select({
  backgroundColor: '#0f0f0f98',
  borderRadius: 0,
  with: '125px',
  height: '30px',
  color: '#ffffff',
});

export const Dropdown = <T extends string | number>({
  options,
  onChange,
}: {
  options: SelectItem<T>[];
  onChange: (value: T) => void;
}) => {
  const defaultOption = {
    name: '-- select --',
    value: '',
  };

  return (
    <SelectElement onChange={(e) => onChange(e.target.value as T)}>
      <DropdownSelectItem selectItem={defaultOption} key={'default'} />
      {options.map((option: SelectItem<T>) => {
        return <DropdownSelectItem selectItem={option} key={option.value} />;
      })}
    </SelectElement>
  );
};
