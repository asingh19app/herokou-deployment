//globalizations
const express = require('express')
const app = express()


//configs
require('dotenv').config()
const PORT = process.env.PORT

//routes
app.get('/', (req,res) => {
    res.send('Hello World')
})

//listen
app.listen(PORT, () => {
    console.log('listening to', PORT)
})

module.exports = app;