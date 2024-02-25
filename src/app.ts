import express from 'express'
import { getAnimals } from './api/animals.controller.js'

const app = express()
app.use(express.json())

app.get('/api/animals', getAnimals)

export default app
