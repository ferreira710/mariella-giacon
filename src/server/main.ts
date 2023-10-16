import 'dotenv/config'
import express from 'express'
import ViteExpress from 'vite-express'

const app = express()

const server = app.listen(3000, () =>
    console.log('Servidor rodando na porta 3000')
)

app.use(express.json())

app.get('/life-check', (_, res) => {
    res.json({ message: 'OK' })
})

ViteExpress.bind(app, server)
