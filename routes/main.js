const express = require('express')

const router = express.Router()
const fs = require('fs')


router.get('/', (req,res) =>{
    res.render('page')
})

const arrTitle = [

]


router.get('/item', (req,res) => {
    console.log(arrTitle);
    res.json(arrTitle)
})




router.post('/items', (req,res) => {
    arrTitle.push({title:req.body.title, text:req.body.text})
    res.json(arrTitle)
})




module.exports = router;