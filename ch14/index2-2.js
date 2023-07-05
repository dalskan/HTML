const express = require('express')
const app = express()

app.listen(3000,()=>{
    console.log("App listening on port 3000")
})

const path = require('path')

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
})

app.get('/about',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'about.html'))
})

app.get('/contact',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'contact.html'))
})

app.get('/notfound',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'notfound.html'))
})

