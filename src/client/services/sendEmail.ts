import axios, { AxiosError } from 'axios'

type Props = {
    name: string
    email: string
    message: string
}

export async function sendEmail({ name, email, message }: Props) {
    try {
        const response = await axios.post('http://localhost:3000/send-email', {
            name,
            email,
            message,
        })
        return response.data
    } catch (error) {
        throw new AxiosError('Erro no envio do e-mail: ' + error)
    }
}
