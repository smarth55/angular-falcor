'use strict';

let express = require('express');
let router = express.Router();

let FalcorExpress = require('falcor-express');
let FalcorRouter = require('falcor-router');

router.get('/', FalcorExpress.dataSourceRoute((req, res) => {
	return new FalcorRouter([
		{
			route: 'list',
			get: () => {
				return {path: ['list'], value: 'Ryan Paulsen'};
			}
		}
	]);
}));

module.exports = router;