const express = require('express')
const app = express()
const port = 3333

app.get('/', (req, res) => {
  return res.json({ message: 'server is up' })
})

app.post('/test', (req, res) => {
  const { name } = req.body;

  return res.json({ name })
})

app.listen(port, () => console.log(`server is running on ${port}`))