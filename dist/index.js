
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-use-cart-encrypted.cjs.production.min.js')
} else {
  module.exports = require('./react-use-cart-encrypted.cjs.development.js')
}
