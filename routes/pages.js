
var fs = require('fs')
  , md = require("node-markdown").Markdown

module.exports = function(app){
  app.get(/\/(.+)\.html/, function(req, res, next){
    var doc_name = req.params[0]
    console.log('doc name: ' + doc_name)
    fs.readFile('./docs/' + doc_name + '.markdown', function(err, doc){
      if(err) return next(err)
      res.render('page', { body : md(doc.toString()) })
    })
  })
}