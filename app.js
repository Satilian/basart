const express = require('express')
const app = express()
const compression = require('compression')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')

const fs = require('fs')
const https = require('https')
const options = {
  cert: fs.readFileSync('./sslcert/fullchain.pem'),
  key: fs.readFileSync('./sslcert/privkey.pem')
}

https.createServer(options, app).listen(8008, () =>
  console.log(`Listening on port 8008!`))

app.use(fileUpload())
app.use(compression())
app.use(cookieParser())
app.use(express.json())
app.use(express.static('public'))
app.set('view engine', 'pug')
app.use('*', (req, res) => res.send("hello World"))
