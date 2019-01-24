const express = require('express');
const app = express();
const { mongoose } = require('./config/db');
const {studentsController} = require('./app/controllers/students_controller')
const port = 3001;

app.use(express.json());
app.get('/', function(req, res) {
	res.send('welcome to the site');
});

app.use('/students', studentsController);


app.listen(port, function() {
	console.log('listening on port', port);
});
