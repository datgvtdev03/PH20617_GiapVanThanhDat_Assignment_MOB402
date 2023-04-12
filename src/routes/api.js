const express=require('express');
const router=express.Router();
var passport = require('passport');
require('../config/token/Passport')(passport); 
var jwt = require('jsonwebtoken');


const meContoller=require('../app/controllers/MeContoller');
router.get('/stored/courses',meContoller.apiStoredCourses);
router.get('/users',meContoller.apiUsers);

module.exports=router;