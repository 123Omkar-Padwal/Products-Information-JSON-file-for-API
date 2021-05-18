const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/books', (req, res) => {
  res.send('Hello Books!')
})

app.listen(port, () => {
  console.log(`Example app listening at :${port}`)
})
