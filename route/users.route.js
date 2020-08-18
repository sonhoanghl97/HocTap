var express = require('express');

var router = express.Router();

var controller = require('../controller/users.controller')
var validate = require("../validate/validate")
var authMiddleware = require("../middleware/auth.middleware")


router.get('/', authMiddleware.requireAuth, controller.index)

router.get('/search',authMiddleware.requireAuth, controller.search)

router.get('/create',authMiddleware.requireAuth, controller.create)

router.post('/create',authMiddleware.requireAuth, validate.postCreate, controller.postCreate)

router.get('/:id',authMiddleware.requireAuth, controller.view)

module.exports = router