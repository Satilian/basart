var express = require('express')
var app = express()

app.listen(8080, () => console.log(`Example app listening on port ${8080}!`))
app.use('*', (req, res) => res.send("hello World") )
