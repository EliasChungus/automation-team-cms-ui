export async function POST(request: Request) {
    const formData = await request.formData()
    const email = formData.get('email')
    return Response.json({ email })
}