import { useState, ChangeEvent } from "react";

export function useFormFields(initialState: any) {
    const [fields, setValues] = useState(initialState);

    return [
        fields,
        (event: ChangeEvent<HTMLInputElement>) => {
            setValues({
                ...fields,
                [event.target.id]: event.target.value,
            });
        },
    ];
}
