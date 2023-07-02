const express = require('express')
const app = express()
const articlesRoute = require('./routes/articles')

const ejs = require('ejs')
const router = require('./routes/articles')

app.set('view engine', 'ejs')

app.use(router)

app.listen(5000,()=>{
    console.log("server is up and running");
})