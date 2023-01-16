const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const verifToken = require('../middleware/auth')
const userModel = require('../model/user')
const productModel = require('../model/product')

const routes = express.Router()


routes.post('/register', (req, res) => {

    const {email, firstname, lastname, password} = req.body;

    if(!email || !firstname || !lastname || !password)
        return res.status(404).json({message: 'donnees user manquants'});

    bcrypt.genSalt(10, (err, salt) => {
        if(err)
            return res.status(500).json({message: 'err generation salt'});

        bcrypt.hash(password, salt, (err, hash) => {
            if(err)
                return res.status(500).json({message: 'err generation hash'});

            const user = new userModel({...req.body, password:hash});

            user.save((err, user) => {
                if(err)
                    return res.status(500).json({message: 'err save user'});

                return res.status(200).json({message: 'user saved'});
            })

        })

    })
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