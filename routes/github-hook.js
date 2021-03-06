var fs = require('fs')
  , md = require("node-markdown").Markdown
  , sys = require('sys')
  , exec = require('child_process').exec


module.exports = function(app){
  app.post('/github-hook', function(req, res, next){
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress
    console.log('request for github-hook: ' + ip)
    if( ip !== '207.97.227.253'
      && ip !== '50.57.128.197'
      && ip !== '108.171.174.178'
    ) {
      console.log('the request did no come from a valid github server')
      return res.send(404) // the request didn't come from github
    }

    console.log('executing child process')
    console.log(process.cwd())
    var child = exec("git pull origin master", function (error, stdout, stderr) {
      console.log('stdout...')
      sys.print('stdout: ' + stdout)
      sys.print('stderr: ' + stderr)
      if (error !== null) {
        console.log('exec error: ' + error)
      }
      console.log('exiting')
      process.exit()
      
    })
  })
}
