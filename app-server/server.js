// To start the server:
// cd app-server
// node server.js  

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const user = require("./routes/user")

mongoose.connect('mongodb://localhost:27017/RateMyGSI-Database')
const database = mongoose.connection

const gsiSchema = mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  email: {
    required: false,
    type: String
  },
  linkedin: {
    required: false,
    type: String
  }
})

const GSIModel = mongoose.model('GSI', gsiSchema)

/*
new GSIModel({
  name: "Mackenzie Moffit",
  email: "hello@berkeley.edu"
}).save()
*/

database.on('connected', () => {
  console.log('Connected to db successfully')
})

database.on('error', (err) => {
  console.error("db error", err)
})

app.get('/gsis', async (req, res) => {
  const data = await GSIModel.find()
  res.json(data)
})

app.use("/user", user);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})