const express = require('express')
var favicon = require('serve-favicon')
var path = require('path')

const PORT = precess.env.PORT || 3000

const app =express()
app.use(favicon(path.join(__dirname, '../public', 'favicon.ico')))
app.use(express.static('public'))

app.listen(PORT, console.log(`http server lising on port ${PORT}`))
