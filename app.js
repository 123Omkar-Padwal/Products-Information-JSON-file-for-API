const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/Speaker1', (req, res) => {
  res.send('No wires. No hassles. Introducing the completely cord free JBL T100TWS. They are powerful in sound thanks to a 5.8mm driver featuring JBL Pure Bass sound and colorful in design. The earbuds combined with the elegantly designed portable charging case provide up to 17 hours of unrestrained musical enjoyment. Ergonomically shaped, they also ensure long lasting comfort. Equipped with intuitive and handy controls that are conveniently located on each earpiece, including one click access to Siri and Google Now.')
})

app.listen(port, () => {
  console.log(`Example app listening at :${port}`)
})
