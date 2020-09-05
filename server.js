const express = require('express')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
    res.send('<h1>HELLO WELCOME</h1>')
})



module.exports = server