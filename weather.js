var request = require('request')



module.exports = function(location) {

	return new Promise(function(resolve, reject) {
		console.log('location got is ' + location)
		var encodedLocation = encodeURIComponent(location)
		var url = 'http://api.openweathermap.org/data/2.5/weather?appid=f8d98431f8b36c7e6b3debcb9681a93f&q=' + encodedLocation + '&units=Metric';
		console.log(url)
		encodeURIComponent(location)
		if (!location) {
			reject('No Location provided')
		}

		request({
			url: url,
			json: true
		}, function(error, response, body) {
			if (error) {
				console.log(error.message)
				reject('Unable to fectch weather')
			} else {
				console.log(body)
				if (body.cod == '404') {
					reject('City Not found')
				} else {
					resolve('Its ' + body.main.temp + ' degrees in ' + location)
				}
			}
		})
	})

}