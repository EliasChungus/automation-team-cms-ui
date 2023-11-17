export default function ShowPasswordCheckbox(
    {formId}: { formId: string }
) {
    let inputId = "show password"
    return (
        <>
            <input type="checkbox" id={inputId} name={inputId} form={formId}/>
            <label htmlFor={inputId}> Show Password</label>
        </>
    )
}