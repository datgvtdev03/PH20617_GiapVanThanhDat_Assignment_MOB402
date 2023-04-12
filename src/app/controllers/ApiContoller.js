const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const User = require('../models/User');
const { mongoosetoObject, mutipleMongoosetoObject } = require('../../util/mongoose');
var passport = require('passport');
require('../../config/token/Passport')(passport); 
var jwt = require('jsonwebtoken');
const session = require('express-session');


class ApiController {
  
}

module.exports = new MeController();
