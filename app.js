const dash = require('appmetrics-dash');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries');
var app = express();


app.use(bodyParser.json())
var port = process.env.PORT || 3030

app.route('/getItems').get(db.getUsers);
//app.get('/getItems',db.getUsers)

const appServer = app.listen(port, () => {
    console.log("Running on Nodemon port " + port);
});

dash.monitor({server: appServer});
module.exports = app;