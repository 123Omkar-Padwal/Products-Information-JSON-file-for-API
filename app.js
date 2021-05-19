const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/Speaker1', (req, res) => {
  res.send('No wires. No hassles. Introducing the completely cord free JBL T100TWS. They are powerful in sound thanks to a 5.8mm driver featuring JBL Pure Bass sound and colorful in design. The earbuds combined with the elegantly designed portable charging case provide up to 17 hours of unrestrained musical enjoyment. Ergonomically shaped, they also ensure long lasting comfort. Equipped with intuitive and handy controls that are conveniently located on each earpiece, including one click access to Siri and Google Now.')
})
app.get('/Speaker2', (req, res) => {
  res.send('No wires. No hassles. Introducing the completely cord free JBL C100TWS. They are powerful in sound thanks to a 5.8mm driver featuring JBL Pure Bass sound and colorful in design. The earbuds combined with the elegantly designed portable charging case provide up to 17 hours of unrestrained musical enjoyment. Ergonomically shaped, they also ensure long lasting comfort. Equipped with intuitive and handy controls that are conveniently located on each earpiece, including one click access to Siri and Google Now.')
})
app.get('/Laptop1', (req, res) => {
  res.send('Stunning desktop-grade power in a sleek, portable design keeps you playing your best wherever gaming takes you. Take on the most demanding AAA game titles with NVIDIA® graphics and an Intel® Core™ processor[1]. Immerse yourself in smooth gameplay on a narrow-bezel display with fast refresh rates.
Desktop-grade performance
Get the power of a desktop in your laptop. With an Intel® Core™ processor[1], NVIDIA® graphics, and accelerated storage, nothing holds you back.
Fast, fluid gameplay
Crisp gameplay is crucial if you want to play at your best. With a high resolution and refresh rate, on-screen visuals are swift and smooth, while a narrow bezel display delivers edge-to-edge immersion.
Designed for power
The OMEN 17 Laptop''s sleek, modern design is engineered to produce desktop-grade power. With an advanced thermal cooling solution and single-panel access to internals for easy upgradability, nothing stops you from playing at your best.')
})
app.listen(port, () => {
  console.log(`Example app listening at :${port}`)
})
