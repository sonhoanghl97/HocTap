var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var user
var db = require('./db')

var port = 9000;

var userRoute = require("./route/users.route")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', {
  	name:'Hồng Sơn'
  })
})
app.use("/users", userRoute);
app.listen(port, function(){
	console.log('Server listening on port' + port)
})