//// EXPRESS \\\\
const createError = require('http-errors')
const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

//// AUTH \\\\
const authentication = require('./src/routes/authentication')
const passport = require('passport')
//// NEED THIS FILE FOR PASSPORT TO UNDERSTAND STRATEGY \\\\
const passportService = require('./services/passport')
//// MIDDLEWARE FOR PROTECTED ROUTES \\\\
const requireAuth = passport.authenticate('jwt', {session: false})


//// ROUTERS \\\\
const chizetteartRouter = require('./src/routes/chizetteart')
const printfulRouter = require('./src/routes/printful')
const braintreeRouter = require('./src/routes/braintree')


// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

//// CORS HEADERS \\\\
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Request-Headers, token')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, DELETE, PUT')
  res.header('Access-Control-Expose-Headers', 'Auth')
  res.header('Referrer-Policy', 'no-referrer')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  else {
    next()
  }
})


//// ROUTES \\\\
app.get('/', requireAuth, (req, res) => res.redirect('/chizetteart'))
app.use('/chizetteart', chizetteartRouter)
app.use('/', authentication)
app.use('/printful', printfulRouter)
app.use('/braintree', braintreeRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app