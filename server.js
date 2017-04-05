var express = require('express')

// Create our app
var app = express()

// Folder to expose to the server
app.use(express.static('public'))

app.listen(3000, function(){
	console.log("Server listening on port 3000")
})