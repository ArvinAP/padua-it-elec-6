
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const mongoose = require('mongoose');
const Post = require('./models/post');

mongoose.connect('mongodb+srv://pads:arvin0227@pads.mdz7z.mongodb.net/?retryWrites=true&w=majority&appName=pads')

    .then(() => {console.log('Connected to MongoDB');})
    .catch(() => {console.log('Connection failed');})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");

    res.setHeader('Access-Control-Allow-Methods',
        "GET, POST, PATCH, DELETE, OPTIONS")
    next();}
    )


    app.post('/api/posts', (req, res, next) => {
        const post = new Post({
            title: req.body.title,
            content: req.body.content
        });
       post.save();
        res.status(201).json({
            message: "Post added successfully"
        });
    })

app.get('/api/posts',(req, res, next) => {
   Post.find()
        .then(documents =>{
            res.status(200).json({
                message: 'Posts successfully fetched',
                posts: documents
            });
        })
});

app.delete('/api/posts/:id',(req, res, next) => {
    Post.deleteOne({_id: req.params.id }).then(result => {
        console.log(result);
        console.log(req.params.id);
        res.status(200).json({ message: "Post deleted"});
    })
});

module.exports = app;