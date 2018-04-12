var express = require('express');
var weather = require('./weather.js')
var app = express()
var bodyParser = require('body-parser')
var _ = require('underscore')

var PORT = process.env.PORT || 3000
var todos = []
var todoNextId = 1

app.use(bodyParser.json())

app.get('/', function(req, res) {
	res.send('To DO API Root');
})


//getWeather/City
app.get('/getWeather/:city', function(req, res) {
	var city = req.params.city

	weather(city).then(function (weather) {
				console.log(weather)
				if (weather) {
		res.json(weather)
	} else {
		res.status(404).send()
	}
			}, function (error) {
				console.log(error)
				res.status(404).send()
			})

	// var matchedTodo = _.findWhere(todos, {
	// 	id: todoId
	// })
	

})

app.listen(PORT, function() {
	console.log('Express listening on port ' + PORT)
})