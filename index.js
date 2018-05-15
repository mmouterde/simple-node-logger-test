const express = require('express');
const app = express();

app.get('/', function (req, res) {
    console.log(req.query);
    res.send("");
});
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Ok')
});