
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
    const posts = 
        [{
            id: "adad",
            title: "first tit;e server",
            content: "first content"
        },
        {
            id: "adad",
            title: "second tit;e server",
            content: "second content"
        }
    ];
    

    res.status(200).json({
        message: "Posts fetched successfully",
        posts: posts
    });
})

module.exports = app;