const newsRouter = require('./news');
const meRouter=require('./me')
const courseRouter = require('./courses');
const siteRouter = require('./site');
const authRouter =require('./auth')

function route(app) { 
  // app.use(function(req, res, next) {
  //   const currentUser = req.cookies['data-user'];
  //   res.locals.currentUser = currentUser;
  //   next();
  // });
  app.use('/me',meRouter)
  app.use('/courses',courseRouter)
  app.use('/news', newsRouter);
  app.use('/authtification',authRouter)
  app.use('/',siteRouter);
}

module.exports = route;
