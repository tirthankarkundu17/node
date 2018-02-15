var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');



app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use('/site', express.static(path.join(__dirname,'site')));
app.get('/',function(req,res){
  //res.sendfile('./site/index.html');
  res.sendFile('site/index.html' , { root : __dirname});
})

app.listen(8080);
console.log('Server running on port 8080...')
