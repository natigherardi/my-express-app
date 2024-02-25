import app from './app.js'

const port = process.env.PORT ?? 3000

app.listen(port, () => {
  console.log(`⚡️[server]: Server listening in port ${port}`)
})
