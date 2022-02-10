const express = require('express')

const router = express.Router()

router.get('/product', (req, res, next) => {
  console.log('访问了product get请求')
  next()
})

module.exports = router
