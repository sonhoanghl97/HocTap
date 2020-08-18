var md5 = require('md5')
var cookieParser = require('cookie-parser')

var db = require('../db')

module.exports.login =function(req, res){
	res.render('auth/login',{
		users: db.get('users').value()
	})
}
module.exports.postLogin = function(req,res){
	var email = req.body.email
	var password = req.body.password
	var user=db.get('users').find({email:email}).value()
	if(!user){
		res.render('auth/login',{
			errors: [
			"Sai email rồi!!!. Nhập lại đi"
			],
			values : req.body
		})
		return;
	}
	if(user.password!==md5(password)){
		res.render('auth/login',{
			errors:[
				"Sai mật khẩu rồi!! Nhập lại đi"
			],
			values: req.body
		})
		return;
	}
	res.cookie('userId', user.id, {
		signed: true
	})
	res.redirect('/users')
}