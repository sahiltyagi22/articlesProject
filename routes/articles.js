const express = require('express')
const Article = require('./../models/articles')
const articles = require('./../models/articles')
const router = express.Router()

router.get('/new',(req,res)=>{
    res.render('./articles/new' ,{article : new Article()})
})

router.get('/:slug',async (req,res)=>{
    
    let article =   await articles.findOne({slug : req.params.slug}).then((article)=>{
        res.render('articles/show',{article : article})
        if(article === null){
            res.redirect('/')
        }
  
    })
    })



router.post('/new', async (req,res)=>{
    let article = new Article({
        title : req.body.title,
        description : req.body.description,
        markdown : req.body.markdown
    })

     try {
     article =await article.save()
           res.redirect(`/articles/${article.slug}`) 
     } catch (error) {
        console.log(error);
        res.render("articles/new",{article :article})
     }
})



module.exports = router