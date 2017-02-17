'use strict';

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors');
let port = process.env.PORT || 8000;

app.disable('x-powered-by');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.options('/', cors());
app.use('/', require('./routes'));

app.listen(port, () => {
	console.log('Listening on port ' + port)
});