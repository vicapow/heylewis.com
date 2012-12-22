
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')

var app = express()

app.configure(function(){
  app.set('port', process.env.PORT || 3000)
  app.set('views', __dirname + '/views')
  app.set('view engine', 'jade')
  app.use(express.favicon())
  app.use(express.logger('dev'))
  app.use(express.bodyParser())
  app.use(express.methodOverride())
  require('./routes')(app)
  app.use(require('less-middleware')({ 
    dest : __dirname + '/public' 
    , src : __dirname + '/views'
  }))
  app.use(express.static(path.join(__dirname, 'public')))
  app.use(function(err, req, res, next){
    console.error(err.stack)
    res.send(500, 'Whoops! Something went wrong.')
  })
})

app.configure('development', function(){
  app.use(express.errorHandler())
})

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'))
})
