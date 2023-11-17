export default function InputError(
    {errorMessage}: {errorMessage: string}
){
    return (
        <>
            Error: {errorMessage}
        </>
    )
}