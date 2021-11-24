import React from "react";
import {TextField} from "@material-ui/core";

interface Props {
    label: string;
    value: string;
    name: string;
    required: boolean;
}

export const FormField: React.FC<Props> = () => {
    return (
        <>
            <TextField />
        </>
    )
}