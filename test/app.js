'use strict'
var path = require('path')
var assert = require('yeoman-assert')
var helpers = require('yeoman-generator').test

describe('generator-remoox:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .on('end', done)
  })

  it('creates files', function () {
    assert.file([
      'server.js',
      'package.js',
      'main.css',
      'webpack.config.js'
    ])
  })
})
