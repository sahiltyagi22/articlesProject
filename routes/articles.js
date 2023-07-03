const express = require('express')
const Article = require('./../models/articles')
const articles = require('./../models/articles')
const router = express.Router()

router.get('/new',(req,res)=>{
    res.render('./articles/new' ,{article : new Article()})
})

router.get('/:id',async (req,res)=>{
    let id = req.params.id
    let article =   await articles.findById(id).then((article)=>{
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
           res.redirect(`/articles/${article.id}`) 
     } catch (error) {
        res.render("articles/new",{article :article})
     }
})



module.exports = router