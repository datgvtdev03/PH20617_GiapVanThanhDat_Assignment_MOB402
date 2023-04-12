const newsRouter = require('./news');
const meRouter=require('./me')
const courseRouter = require('./courses');
const siteRouter = require('./site');
const authRouter =require('./auth')
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
const apiRouter=require('./api')

function route(app) { 
 
  app.use('/api',apiRouter)
  app.use('/me',meRouter)
  app.use('/courses',courseRouter)
  app.use('/news', newsRouter);
  app.use('/authtification',authRouter)
  app.use('/',siteRouter);
}

module.exports = route;
