const express = require('express')
const app = express()
const port = process.env.PORT||3000;


app.get('/', (req, res) => {
  res.send('Hello, my name is Hetva')
})
app.get('/home', (req, res) => {
    res.send('Hello, this is home page')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})