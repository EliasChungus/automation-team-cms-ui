export default function SubmitButton(
    {buttonValue}: {buttonValue: string},
    {formId}: {formId: string}
){
    return(
        <>
            <input type={"submit"} value={buttonValue} form={formId}/>
        </>
    )
}