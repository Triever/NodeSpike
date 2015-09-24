var express = require('express');
var app = express();

app.get('/', function (req,res) {
	res.json({message:'api GET'});
	});

app.listen(process.env.PORT || 8080);