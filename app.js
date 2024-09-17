const express = require('express')
const mongoose = require('mongoose')
const ejs = require('ejs')
const path =require('path')
const app = express()
// const user = require('./src/models/userModel')
const userRoute = require('./src/routes/user')
const port = 3000

app.use(express.json())
app.use(express.static(path.join(__dirname, "src", "public")))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "src", "views"))


// Root route
app.get('/', (req, res) => {

  try {
  res.render('index', {activePage: 'home'})
  } 
  catch (error) {
    res.status(error.status || 500).send("Error! File Not Found")
  }

})

app.get('/about',(req, res) => {
    try{
      res.render('about', {activePage: 'about'})
    }
    catch(error){
      res.status(error.status || 500).send("Error! File Not Found")
    }
})

app.get('/contact', (req, res) => {
    try{
    res.render('contact', {activePage: 'contact'})
    }
    catch(error){
      res.status(error.status || 500).send("Error! File Not Found")
    }
})
app.get('/projects', (req, res) => {
    try{
    res.render('projects', {activePage: 'projects'})
    }
    catch(error){
      res.status(error.status || 500).send("Error! File Not Found")
    }
})
app.get('/blog', (req, res) => {
    try{ 
    res.render('blog', {activePage: 'blog'})
    }
    catch(error){
      res.status(error.status || 500).send("Error! File Not Found")
    }
})

app.get('/faqs', (req, res) => {
  try{
    res.render('FAQs', {activePage: ''})
  }
  catch(error){
    res.status(error.status || 500).send("Error! File Not found")
  }
})

// Sign Up Route
app.use('/auth', userRoute);


mongoose.connect('mongodb+srv://msiddique098:Asdf0340@cluster0.on4j9.mongodb.net/mCoder' ).then(() => {
  console.log('MongoDB connected')
  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  })

}).catch((err) => {console.log(err)

})
