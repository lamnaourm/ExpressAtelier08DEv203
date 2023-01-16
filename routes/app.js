const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const verifToken = require('../middleware/auth')
const userModel = require('../model/user')
const productModel = require('../model/product')

const routes = express.Router()


routes.post('/register', (req, res) => {

})

routes.post('/login', (req, res) => {
    
})

routes.get('/products',verifToken, (req, res) => {
    
})

routes.get('/product/:name',verifToken, (req, res) => {
    
})

routes.post('/product/',verifToken, (req, res) => {
    
})

routes.put('/product/:name',verifToken, (req, res) => {
    
})

routes.delete('/product/:name',verifToken, (req, res) => {
    
})


module.exports = routes;