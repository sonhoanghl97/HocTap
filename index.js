var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var app = express()
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test-express')
var db = require('./db')

var authRoute = require("./route/auth.route")

var port = 9000;

var userRoute = require("./route/users.route")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser('adasdas132'))

app.use(express.static('public'))

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', {
  	name:'Hồng Sơn'
  })
})
app.use("/users", userRoute);
app.use("/auth", authRoute)

app.listen(port, function(){
	console.log('Server listening on port' + port)
})