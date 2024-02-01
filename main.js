const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile("public/index.html",{root:__dirname})
})
app.get('/about', (req, res) => {
  res.sendFile("templates/about.html",{root:__dirname})
})
app.get('/contact', (req, res) => {
  res.sendFile("templates/contact.html",{root:__dirname})
})
app.get('/services', (req, res) => {
  res.sendFile("templates/services.html",{root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})