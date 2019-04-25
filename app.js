var express = require('express')
var app = express()


app.set('view engine', 'ejs')

app.use(express.static("./public"))

app.get('/', function (req, res) {
  res.render('about')
})

app.get('/contact', function (req, res) {
    res.render('contact')
})

app.get('/project', function (req, res) {
    res.render('project')
})  
app.listen(3000, console.log("Server is live on port 3000"))