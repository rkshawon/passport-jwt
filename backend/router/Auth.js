const express = require('express')
const passport = require('passport')
const route  = express.Router()
const AuthController = require('../controller/AuthController')

route.post('/login', AuthController.logIn)
route.post('/register', AuthController.register)
route.get('/protected', passport.authenticate('jwt', {session: false}), AuthController.protectedRoute)

module.exports = route