import { SES } from '@aws-sdk/client-ses'
import 'dotenv/config'
import express from 'express'
import ViteExpress from 'vite-express'

import { SESClientConfig } from '@aws-sdk/client-ses'

const app = express()

const server = app.listen(3000, '0.0.0.0', () =>
    console.log('Servidor rodando na porta 3000')
)

const sesConfig: SESClientConfig = {
    credentials: {
        accessKeyId: process.env.VITE_AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY || '',
    },
    region: process.env.VITE_AWS_REGION || '',
}

const ses = new SES(sesConfig)

app.use(express.json())

app.get('/life-check', (_, res) => {
    res.json({ message: 'OK' })
})

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body
    const params = {
        Source: email,
        Destination: {
            ToAddresses: [process.env.VITE_EMAIL || ''],
        },
        Message: {
            Subject: {
                Data: `Contato de ${name} via site.`,
            },
            Body: {
                Text: {
                    Data: message,
                },
            },
        },
    }

    ses.sendEmail(params, (err: any) => {
        if (err) {
            console.error(err)
            res.status(500).send('Erro no envio do e-mail')
        } else {
            res.status(200).send('E-mail enviado com sucesso')
        }
    })
})

ViteExpress.bind(app, server)
