import ContainerTitle from '@/components/container/containerTitle';
import Input from '@/components/container/input/input';
import SubmitButton from "@/components/container/submitButton";
import ShowPasswordCheckbox from "@/components/container/showPasswordCheckbox";
import Link from "next/link";

export default function SignIn() {
    return (
        <>
            <ContainerTitle title={"Sign In"}/>
            <form id={"formId1"}>
                <Input inputId={"email"} inputType={"email"} label={"Email"} formId={"formId1"} inputErrorMessage={"Test"}></Input>
                <Input inputId={"password"} inputType={"password"} label={"Password"} formId={"formId1"} inputErrorMessage={"Test"}></Input>
                <ShowPasswordCheckbox formId={"formId1"}/>
                <Link href={"forgot-password"}></Link>
                <SubmitButton buttonValue={"Sign In"}/>
            </form>
        </>
    )
}