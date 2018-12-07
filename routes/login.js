const express = require('express')
const router = express.Router()
const knex = require('../knex')
const bodyParser = require('body-parser')

router.get('/', (req, res, next) => {
    knex('admin')
      .then((rows) => {
        res.json(rows)
      })
      .catch((err) => {
        next(err)
      })
})

module.exports = router