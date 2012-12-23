var fs = require('fs')
  , md = require("node-markdown").Markdown

module.exports = function(app){
  app.get('/github-hook', function(req, res, next){
    console.log('request for github-hook: ' + req.connection.remoteAddress)
    res.send(200)
  })
}