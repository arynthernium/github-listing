require('dotenv').config();
const express = require('express');
const app = express();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

const userURL = `https://api.github.com/users/${process.env.user}`;
const reposURL = `https://api.github.com/users/${process.env.user}/repos`;

app.set("view engine", "ejs");
app.use(express.static('public'))

function getData(url) {
	xhr.open('GET', url, false);
	xhr.send(null);

	if (xhr.status === 200) {
		return JSON.parse(xhr.responseText);
	}
}


app.get('/', (req, res) => {
	res.render('main', { user: getData(userURL), repos: getData(reposURL) })
});

app.listen(process.env.port, () => {
	console.log(`Running at http://localhost:${process.env.port}`)
});
