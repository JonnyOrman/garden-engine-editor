import React from 'react';
import SelectItem from './SelectItem';

export const DropdownSelectItem = <T extends string | number>({
  selectItem,
}: {
  selectItem: SelectItem<T>;
}) => {
  return <option value={selectItem.value}>{selectItem.name}</option>;
};

export default DropdownSelectItem;
