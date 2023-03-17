const express = require('express')
const app = express()
const port = 3333

app.get('/', (req, res) => {
  return res.json({message:'server is up'})
})

app.listen(port, () => console.log(`server is running on ${port}`))