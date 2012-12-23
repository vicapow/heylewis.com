var fs = require('fs')
  , md = require("node-markdown").Markdown

module.exports = function(app){
  app.post('/github-hook', function(req, res, next){
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress
    console.log('request for github-hook: ' + ip)
    res.send(200)
  })
}
