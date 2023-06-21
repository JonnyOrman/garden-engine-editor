import { Dispatch, useState } from "react";
import Submitter from "./Submitter";

export const useSubmitter = <T>(
    defaultValue: T,
    submitter: Submitter<T>,
    onSubmit: () => void
)
: [(e: any) => void, <TProperty>(t: TProperty, updateValue: (newPropertyValue: TProperty) => T) => void, T] => {
    const [value, setValue] = useState(defaultValue);

    const submit = (e: any) => {
        submitter.submit(value, e, onSubmit);
    }

    const handleChange = <TProperty>(newPropertyValue: TProperty, updateValue: (newPropertyValue: TProperty) => T) => {
        const newValue = updateValue(newPropertyValue);
        setValue(newValue);
    }

    return [submit, handleChange, value];
}