var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var PythonShell = require('python-shell');
app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

var server = app.listen(process.env.PORT || 8084, function() {
	var host = server.address().address
    var port = server.address().port
	console.log("Example app listening at local host", host, port)
})


app.post('*', function(req, res){
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

	var analysis = executePythonScript(req.body.companyName, req.body.symbol,res);
	
})


var pyshell = new PythonShell('webscraper.py');

// var options = {
// 	  mode: 'text',
// 	  pythonPath: 'webscaper.py',
// 	  pythonOptions: ['-u'],
// 	  scriptPath: 'webscraper.py',
// 	  args: [companyName,symbol]
// 	};

function executePythonScript(companyName, symbol,res){
	
	PythonShell.run('webscraper.py', {args: [companyName,symbol]}, function (err, results) {
	  if (err) throw err;
	  console.log(results);
	  res.send(results);
	});
	
}