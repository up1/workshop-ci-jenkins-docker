const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // Get hostname
  const os = require('os');
  const hostname = os.hostname();
  res.send('Hello World NodeJS! from ' + hostname)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})