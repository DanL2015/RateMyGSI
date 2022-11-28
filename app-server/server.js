// To start the server:
// cd app-server
// node server.js  

const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const app = express()
const port = 3000
const user = require("./routes/user")
const gsi = require("./model/Gsi")

mongoose.connect('mongodb://localhost:27017/RateMyGSI-Database')
const database = mongoose.connection

// const gsiSchema = mongoose.Schema({
//   name: {
//     required: true,
//     type: String
//   },
//   email: {
//     required: false,
//     type: String
//   },
//   linkedin: {
//     required: false,
//     type: String
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//   }
// })

// const GSIModel = mongoose.model('GSI', gsiSchema)

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
  const data = await gsi.find()
  res.json(data)
})

app.use(bodyParser.json());

app.use("/user", user);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



/*   submiting new commont for a gsi?

app.post('/post', (req, res) => {
  if (data[req.body.id]) {
    throw new Error("Comment exists!")
  }
  const newGsi = {id:parseInt(req.body.id, 10), title: req.body.title, body: req.body.body, comments: []}
  data[req.body.id] = newPost
  res.send(newPost)
})

app.post('/post/:postId/comment', (req, res) => {
  const post = data[req.params.postId]
  post.comments = [...post.comments, req.body.newComment]
  res.send(post)
})
*/