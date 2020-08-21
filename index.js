var path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 80

app.use(function (req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
	console.log('Server has been started...')
})