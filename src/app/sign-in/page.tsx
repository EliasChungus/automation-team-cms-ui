import Input from "@/components/container/input/input";
import ContainerTitle from "@/components/container/containerTitle";

export default function SignIn(

) {
    //    {inputId}: { inputId: string },
    //     {inputType}: { inputType: HTMLInputTypeAttribute },
    //     {label}: { label: string },
    //     {formId}: { formId: string },
    //     {inputErrorMessage}: {inputErrorMessage: string}
    return (
        <>
            <ContainerTitle title={"Sign In"}/>
            <Input inputId={"email"} inputType={"email"} label={"Email"} formId={"formId1"} inputErrorMessage={"TestErrorMessage"}></Input>
        </>
    )
}