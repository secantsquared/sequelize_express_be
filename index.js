const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const Post = require('./postModel.js')

const app = express()

app.use('/', [express.json(), cors(), helmet()])

app.get('/', (req, res) => {
  Post.findAll()
    .then(users => res.status(200).json(users))
    .catch(({ code, message }) => res.status(500).json({ code, message }))
})

app.post('/', (req, res) => {
  Post.create({ title: req.body.title, description: req.body.description })
    .then(post => res.status(200).json({ id: post.id }))
    .catch(err => console.error(err))
})

const port = process.env.NODE_ENV || 5000
app.listen(port, () => console.log(`>>Listening on http://127.0.0.1:${port}`))
