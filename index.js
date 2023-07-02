const express = require('express')
const app = express()
const articlesRoute = require('./routes/articles')

const ejs = require('ejs')


app.set('view engine', 'ejs')

app.use('/articles',articlesRoute)

app.get('/',(req,res)=>{
    const articles =[
        {
        title : "Test Article",
        publishAt : new Date(),
        description : "this is an test article"
    },
    {
        title : "Test Article2",
        publishAt : new Date(),
        description : "this is an test article2"
    }
    
    ]
    res.render('./articles/index', {articles : articles})
})

app.listen(5000,()=>{
    console.log("server is up and running");
})