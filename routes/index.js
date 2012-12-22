
var fs = require('fs')
  , md = require("node-markdown").Markdown

/**
  * GET home page.
  */
module.exports = function(app){
  app.get('/', function(req, res, next){
    res.render( 'index', { 
      title : 'Lewis Lehe'
      , body : md(fs.readFileSync('./docs/index.markdown').toString())
    })
  })
  require('./pages')(app)
}