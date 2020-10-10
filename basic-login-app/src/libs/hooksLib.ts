import { useState, ChangeEvent } from "react";

export function useFormFields(initialState: object) {
    const [fields, setValues] = useState(initialState);

    return [
        fields,
        function (event: ChangeEvent<HTMLInputElement>) {
            setValues({
                ...fields,
                [event.target.id]: event.target.value,
            });
        },
    ];
}
