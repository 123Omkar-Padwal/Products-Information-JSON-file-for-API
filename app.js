const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/MarshalSpeaker', (req, res) => {
  res.send('Weighing only 1.4 kg, Stockwell II packs a solid punch despite its pint-sized frame. Utilising Blumlein Stereo Sound construction, this speaker provides a multi-directional experience that will immerse you in your music, indoors or out.')
})
app.get('/BoatSpeaker', (req, res) => {
  res.send('No wires. No hassles. Introducing the completely cord free JBL C100TWS. They are powerful in sound thanks to a 5.8mm driver featuring JBL Pure Bass sound and colorful in design. The earbuds combined with the elegantly designed portable charging case provide up to 17 hours of unrestrained musical enjoyment. Ergonomically shaped, they also ensure long lasting comfort. Equipped with intuitive and handy controls that are conveniently located on each earpiece, including one click access to Siri and Google Now.')
})
app.get('/Laptop1', (req, res) => {
  res.send('11th Generation Intel ® Core ™ i5-1135G7 Processor (8MB Cache, up to 4.2 GHz)\nWindows 10 Home Single Language, English.\nIntel® Iris® Xe Graphics with shared graphics memory.\n8GB, 8GBx1, DDR4, 3200MHz,512GB M.2 PCIe NVMe Solid State Drive\navailable with Windows 10 Home or Windows 10 Pro – get the best combination of Windows features you know and new improvements you’ll love.')
})
app.get('/AC1', (req, res) => {
  res.send('A hidden Intelligent central digital dynamic LED display that indicates the operation status vividly. This smart feature makes use of technology smart and user friendly.\nEnhance the cooling of your AC like never before with this smart Multi Fold Evaporator that pushes the heat off indoors. It also makes the unit more compact in size.')
})
app.get('/AC2', (req, res) => {
  res.send('Efficient Cooling even at extreme Temperature of 54*C.\nUses Ocean Transparent Coating on the Outdoor and Indoor of the AC making it Completely Rust Free. And the Grill used in the Outdoor is High Quality Plastic which helps in Protecting Against any Kind of Rusting.\nUses Micro Dust filter whose grid Gap measured is of 1.2mm, while the grid gap used by other conventional AC'+'s is of 2mm. This Helps in Protecting the AC from Smallest to the Smallest Dust Particle.')
})
app.get('/Fridge1', (req, res) => {
  res.send('Stylish Crown design Has a truly distinctive Crown design that is available in a choice of various colours. It’s softly curved, round-top shape and clean lines to add a sleek and elegant look to your kitchen.\nYour food and fresh stuffs are now much easier to find with safe and power efficient brighter lamp inside the fridge.\nIts Stabiliser Free Operation means it works very steadily and reliably to prevent electrical damages in case of any voltage fluctuations* it automatically cuts off the power.')
})
app.get('/Fridge2', (req, res) => {
  res.send('Twin Inverter Technology helps run both the fan motor and compressor at Inverter causing less fluctuations and more energy savings by automatically adjusting the cooling supply in regards to the cooling demand.\nConsumes less than 1 unit/day which saves money & electricity (according to standard testing in Haier R& D Lab)\nSmarter and Simpler control to optimise temperature and freezing settings with all new digital panel. To prevent children from manipulating the settings, it has a child lock too.')
})
app.get('/Chair1', (req, res) => {
  res.send('Chair is uniquely engineered to support your lower back so that you can stay focused and work comfortably — anywhere, at anytime. The two way adjustable lumbar and one way adjustable arms and breathable mesh create dynamic support that keeps the body in healthy alignment. A fluid chair is a must for a healthier, happier work spot.')
})
app.get('/Chair2', (req, res) => {
  res.send('Fluid Basic’s is uniquely engineered to support your lower back so that you can stay focused and work comfortably — anywhere, at anytime. The two way adjustable lumbar and one way adjustable arms and breathable mesh create dynamic support that keeps the body in healthy alignment. A fluid chair is a must for a healthier, happier work spot.Weighing only 1.4 kg, Stockwell II packs a solid punch despite its pint-sized frame. Utilising Blumlein Stereo Sound construction, this speaker provides a multi-directional experience that will immerse you in your music, indoors or out.')
})
app.get('/TV2', (req, res) => {
  res.send('Powerful X1 processor uses advanced algorithms to cut noise and boost detail. With an even clearer 4K signal, everything you watch is closer to 4K resolution, full of life-like colour and contrast.\nFind all the entertainment you can dream of, as fast as you can talk. With advanced voice control, this Android smart TV lets you enjoy movies and shows from apps or broadcast in an instant.\nOver 5,000 apps, more than any other smart TV Sony'+'s Smart Android TV has an unbeatable number of apps. Choose the ones that make your life more fun and entertaining.\nSee glorious 4K pictures, rich with real-world detail and texture, exclusively powered by our 4K Processor X1™. Images filmed in 2K and even Full HD are upscaled to close-to-4K resolution by 4K X-Reality™ PRO using a unique 4K database.')
})
app.get('/TV1', (req, res) => {
  res.send('This unique and cute vintage TV set is an adorable decorative accent for any tabletop. Use it to decorify your TV cabinet, or as a piggy bank on your shoe rack at home, or as a paperweight or showpiece on your workstation in office.')
})
app.get('/Mobile1', (req, res) => {
  res.send('iPhone SE packs our powerful A13 Bionic chip into our most popular size at our most affordable price. It’s just what you’ve been waiting for.\nDurable glass and aluminium design.\nBrilliant 11.94 cm(4.7-inch) Retina HD display')
})
app.get('/Sofa1', (req, res) => {
  res.send('No one does flexible furniture better than us. Our modular sofas, in multiple styles, colours, and materials are proof of this. Add or subtract footstools, backrests, armrests, and design the sofa you’ve always dreamed of. The GRÖNLID lets you add sofa modules to keep up with your growing needs while the comfortable LANDSKRONA and SÖDERHAMN allow you to create the perfect sofa set for yourself by adding chaise lounges and storage modules. We’ve even got something for smaller spaces - our VALLENTUNA series goes form sofa unit to a single bed if you need space for your guest to sleep.')
})
app.get('/Laptop2', (req, res) => {
  res.send('Elevate your esports experience and push past noobs with a laptop that gives you the ability to climb atop the leaderboard. This Gaming 3 (15) Laptop is your gateway to competitive gaming with AMD Ryzen™ processors, GeForce® graphics, DDR4 memory, and SSD storage options. And with an iridescent Chameleon Blue or slick Onyx Black that refracts light and up to 120Hz FHD display, it is visually pleasing turned on or off. AMD® Ryzen™ 7 4800H Processor (8 Cores / 16 Threads, 2.90 GHz, up to 4.20 GHz with Max Boost, 4 MB Cache L2 / 8 MB Cache L3). Windows 10 Home 64. 39.62cms (15.6) FHD (1920x1080) IPS 250nits Anti-glare, 60Hz. Run your favorite AAA titles smoothly, the way they were meant to be enjoyed with AMD Ryzen™ 4000 H-Series processors, NVIDIA® GeForce® GTX graphics, DDR4 memory, and M.2 NVMe PCIe SSD storage options. These powerful features ensure that you can run games on high settings so that you will always have the advantage of seeing every detail in your gaming environment.')
})
app.get('/Table1', (req, res) => {
  res.send('Classic details and understated style come together in this versatile and functional coffee table. The table top is made of engineered wood and rests on a solid rubberwood frame. The table’s two-tiered construction maximizes space while providing additional stability. Its lower shelf can be used to store magazines and books, keeping the table top free. Two pull-out drawers provide additional storage.')
})
app.listen(port, () => {
  console.log(`Example app listening at :${port}`)
})
