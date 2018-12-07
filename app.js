const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

//// ROUTERS \\\\
const indexRouter = require('./routes/index')
// const loginRouter = require('./routes/login')
const adminRouter = require('./routes/admincrud')
const chizetteartRouter = require('./routes/chizetteart')

//// EXPRESS \\\\
const app = express()

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
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, DELETE, PUT')
  res.header('Referrer-Policy', 'no-referrer')
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200)
  }
  else {
    next()
  }
})

//// ROUTES \\\\
app.use('/', indexRouter)
// app.use('/login', loginRouter)
app.use('/admin', adminRouter)
app.use('/chizetteart', chizetteartRouter)

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

// app.js

const bcrypt = require("bcryptjs");
const saltRounds = 10;
const plainTextPassword1 = "DFGh5546*%^__90";

bcrypt
  .genSalt(saltRounds)
  .then(salt => {
    console.log(`Salt: ${salt}`);

    return bcrypt.hash(plainTextPassword1, salt);
  })
  .then(hash => {
    console.log(`Hash: ${hash}`);

    // Store hash in your password DB.
  })
  .catch(err => console.error(err.message));

module.exports = app
