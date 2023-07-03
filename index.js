const express = require('express')
const app = express()
const mongoose= require('mongoose')
const articlesRoute = require('./routes/articles')

const ejs = require('ejs')

mongoose.connect("mongodb://127.0.0.1/ArticleP",{useNewUrlParser :true,useUnifiedTopology : true})


app.set('view engine', 'ejs')

app.use(express.urlencoded({extended :true}))
app.use('/articles',articlesRoute)



app.get('/',(req,res)=>{
    const articles =[
        {
        title : "Test Article",
        description : "this is an test article",
        publishAt : new Date()
    },
    {
        title : "Test Article2",
        description : "this is an test article2",
        publishAt : new Date()
    }
    
    ]
    res.render('./articles/index', {articles : articles})
})




app.listen(5000,()=>{
    console.log("server is up and running");
})