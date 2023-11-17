import React, {HTMLInputTypeAttribute} from "react";
import InputError from "@/components/container/input/inputError";

interface InputProps {
    inputId: string;
    inputType: HTMLInputTypeAttribute;
    label: string;
    formId: string;
    inputErrorMessage: string;
}

const Input: React.FC<InputProps> = ({
    inputId,
    inputType,
    label,
    formId,
    inputErrorMessage
}) => {
    return (
        <>
            <label htmlFor={inputId}>{label}:</label><br/>
            <input id={inputId} name={inputId} type={inputType} form={formId}/><br/>
            <InputError errorMessage={inputErrorMessage}/>
        </>
    );
}

export default Input;