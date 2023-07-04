const express = require('express')
const app = express()
const mongoose= require('mongoose')
const articlesRoute = require('./routes/articles')
const Article = require('./models/articles')
const ejs = require('ejs')

mongoose.connect("mongodb://127.0.0.1/ArticleP",{useNewUrlParser :true,useUnifiedTopology : true})


app.set('view engine', 'ejs')

app.use(express.urlencoded({extended :true}))
app.use('/articles',articlesRoute)



app.get('/',async (req,res)=>{
    const articles = await Article.find().sort({
        publishAt : "descending"
    })
    res.render('articles/index', {articles:articles})

})




app.listen(5000,()=>{
    console.log("server is up and running");
})