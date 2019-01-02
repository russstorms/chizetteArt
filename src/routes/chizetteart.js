const express = require('express')
const router = express.Router()
const knex = require('../../knex')
const jwt = require('jsonwebtoken')
require('dotenv').config()


//// NOT PROTECTED. NEEDS MIDDLEWARE \\\\
const jwtVerify = (req, res, next) => {
	jwt.verify(req.headers.token, process.env.PASSWORD, (err, _payload) => {
		if (err) {
			err.status = 401
			err.message = `Unauthorized - Get the heck up outta 'ere!`
			return next(err);
		} else {
			req.payload = _payload
			next()
		}
	})
}

//// MIDDLEWARE TO CHECK ID \\\\
const checkIdisNum = (req, res, next) => {
  if (isNaN(req.params.id)) {
    // console.log(`log it out`)
    let err = new Error(`Id not found`)
    err.status = 400
    throw err
  }
  next()
}

//// READ ALL RECORDS \\\\
router.get('/', (req, res, next) => {
  // console.log(req)
    knex('chizetteart').orderBy('created_at', 'desc')
      .then((rows) => {
        res.json(rows)
      })
      .catch((err) => {
        next(err)
      })
})

//// GET ONE RECORD \\\\
router.get('/:id', checkIdisNum, (req, res, next) => {
    knex('chizetteart')
      .where('id',req.params.id)
      .then((rows) => {
        res.json(rows)
      })
      .catch((err) => {
        next(err)
      })
})

//// CREATE ONE RECORD \\\\
router.post('/', jwtVerify, (req, res, next) => {
    knex('chizetteart')
      .insert({
        "title": req.body.title,
        "year": req.body.year,
        "medium": req.body.medium,
        "poster": req.body.poster
      })
      .returning('*')
      .then((data) => {
        res.json(data[0])
      })
      .catch((err) => {
        next(err)
      })
})

//// UPDATE ONE RECORD \\\\
router.put('/:id', jwtVerify, checkIdisNum, (req, res, next) => {
  knex('chizetteart')
  .where('id', req.params.id)
  .then((data) => {
    knex('chizetteart')
    .where('id', req.params.id)
    .limit(1)
    .update({
      "title": req.body.title,
      "year": req.body.year,
      "medium": req.body.medium,
      "poster": req.body.poster
    })
    .returning('*')
    .then((data) => {
      res.json(data[0])
    })
  })
  .catch((err) => {
    next(err)
  })
})

//// DELETE ONE RECORD \\\\
router.delete('/:id', jwtVerify, checkIdisNum, (req, res, next) => {
    knex('chizetteart')
      .where('id', req.params.id)
      .first()
      .then((row) => {
        if(!row) return next()
        knex('chizetteart')
          .del()
          .where('id', req.params.id)
          .then(() => {
            res.send(`ID ${req.params.id} Deleted`)
          })
      })
      .catch((err) => {
        next(err)
      })
})

module.exports = router