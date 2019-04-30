const { is } = require('@magic/test')

const app = require('../src/app.js')

module.exports = [
  { fn: () => app, expect: is.object, info: 'app is an object' },
]
