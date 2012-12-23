var fs = require('fs')
  , md = require("node-markdown").Markdown

module.exports = function(app){
  app.post('/github-hook', function(req, res, next){
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress
    console.log('request for github-hook: ' + ip)
    if( ip !== '207.97.227.253'
      && ip !== '50.57.128.197'
      && ip !== '108.171.174.178'
    ) return res.send(404) // the request didn't come from github
    console.log(req.body)
  })
}
