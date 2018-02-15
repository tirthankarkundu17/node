var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	return res.sendFile('../site/index.html',{root: __dirname });
});



module.exports = router;
