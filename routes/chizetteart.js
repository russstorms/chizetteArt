const express = require('express')
const router = express.Router()
const knex = require('../knex')
// READ ALL records for this table
router.get('/', (req, res, next) => {
  res.send('ALL THE ART!')
})
// READ ONE record for this table
router.get('/:id', (req, res, next) => {
  res.send('GIMME JUST ONE!')
})
// CREATE ONE record for this table
router.post('/', (req, res, next) => {
  res.send('POST THIS MASTAPIECE!')
})
// UPDATE ONE record for this table
router.put('/:id', (req, res, next) => {
  res.send('EDITED THAT MASTAPIECE!')
})
// DELETE ONE record for this table
router.delete('/:id', (req, res, next) => {
  res.send('THIS ONE IS YUCK')
})
module.exports = router