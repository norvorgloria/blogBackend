//const express = require('express')

const router = require('express').Router()
const signup = require('../controllers/auth')
routes.post("/api/auth/signup", signup)
/**
 * desmond.com/api/auth/signup
 * they take in middleware functions
 * 
 * we need a router object
 */

 module.exports = routes