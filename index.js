const express = require('express')
const mongoose = require('mongoose')

//routers here
const authenticationRoutes = require('./routes/auth')

const app = express()
app.use(express.json())


//mongoose connection here
app.use(authenticationRoutes)


//const port = 3000

//app.get('/', (req, res) => {
  //res.send('Hello World!')
//})

//app.listen(port, () => {
  //console.log(`Example app listening at http://localhost:${port}`)
//})