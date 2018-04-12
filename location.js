var request = require('request')

var url = 'http://ip-api.com/json/167.219.60.10' ///json/167.219.60.10'

module.exports = function () {
	return new Promise(function (resolve, reject) {
		request({
			url: url,
			json: true
		}, function (error, response, body) {
			if (error) {
				reject('Unable to fectch weather')
			} else {
				console.log(response)
				console.log(body)
				resolve(body)
		//console.log(JSON.stringify(body, null, 4))
		//console.log('It\'s ' + body.main.temp + 'in ' + body.name)
			}
		})
	})
	
}