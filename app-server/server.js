// To start the server:
// cd app-server
// node server.js  

const express = require('express')
const bodyParser = require("body-parser")
const mongoose = require('mongoose')
const app = express()
const port = 4000
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


// new GSIModel({
//   name: "Mackenzie Moffit",
//   email: "hello@cal.edu"
// }).save()


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

//Add new GSI to database
app.post("/gsi/post", async (req, res) => {
        console.log(req.body);
        var newGsi = new gsi({name: req.body.name, email: req.body.email, linkedin: req.body.linkedin, rating: req.body.rating, ratingCount: req.body.ratingCount, classesTaught: req.body.classesTaught, pronouns: req.body.pronouns, major: req.body.major, semesters: req.body.semesters, ratings: []});
        newGsi.save((err, res) => {
            if (err) res.send(console.error(err));
            res.send(res.name + " saved to database.");
        });
    }
)

//Add new comment to the GSI with gsiid, requires request with a comment
app.post("/comment/:gsiid/post", async(req, res) =>{
  var curGsi = await gsi.findById(req.params.gsiid);
  // console.log(curGsi.comments);
  if (!curGsi.comments) {
    curGsi.comments = [req.body.comment];
  }
  else {
    curGsi.comments = [...curGsi.comments, req.body.comment];
  }
  await curGsi.save();
  res.send("Comment added successfully");
})

// Get all comment of a GSI with gsiid
app.get("/comment/:gsiid", async(req, res) =>{
  var curGsi = await gsi.findById(req.params.gsiid);
  res.json(curGsi.comments)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

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