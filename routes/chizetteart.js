const express = require('express')
const router = express.Router()
const knex = require('../knex')

//// MIDDLEWARE TO CHECK ID \\\\
const checkIdisNum = (req, res, next) => {
  if (isNaN(req.params.id)) {
    console.log(`log it out`)
    let err = new Error(`Id not found`)
    err.status = 400
    throw err
  }
  next()
}

//// READ ALL RECORDS \\\\
router.get('/', (req, res, next) => {
    knex('chizetteart')
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

module.exports = router