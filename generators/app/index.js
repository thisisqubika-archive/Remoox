'use strict'
var yeoman = require('yeoman-generator')
var chalk = require('chalk')
var yosay = require('yosay')

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async()

    this.log(yosay(
      'Welcome to the super special awesome ' + chalk.red('generator-remoox') + ' generator!'
    ))

    var prompts = [{
      type: 'name',
      name: 'appName',
      message: 'Would you like to add a Name for this app?',
      default: this.appname
    }, {
      type: 'description',
      name: 'appDescription',
      message: 'Would you like to add a description?',
      default: '...'
    }, {
      type: 'author',
      name: 'appAuthor',
      message: 'Who is the author of this app?',
      default: '...'
    }]

    this.prompt(prompts, function (props) {
      this.props = props
      done()
    }.bind(this))
  },

  writing: {
    app: function app () {
      this.copy('_index.html', 'index.html')
      this.copy('_server.js', 'server.js')
      this.copy('_webpack.config.js', 'webpack.config.js')
      this.copy('_package.json', 'package.json')
      this.copy('_babelrc', '.babelrc')
      this.copy('_gitignore', '.gitignore')
      this.directory('src/javascript', 'src/javascript')
      this.directory('src/stylesheets', 'src/stylesheets')
      this.directory('src/javascript/actions', 'src/javascript/actions')
      this.directory('src/javascript/components', 'src/javascript/components')
      this.directory('src/javascript/reducers', 'src/javascript/reducers')
    }
  },

  install: function () {
    this.installDependencies({
      npm: true,
      bower: false
    })
  }
})
