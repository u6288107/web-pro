/* Express with Routing */
const path = require('path');
const express = require('express');
const mark = express();
mark.get('/', function(req, res) {
    console.log("Hello world in plain text");
    res.status(200).send("Hello world in plain text");
});
mark.get('/th', function(req, res) {
    res.sendFile(path.join(__dirname + '/greeting_th.html'));
    //__dirname : resolve to your directory name.
});
mark.get('/cn', function(req, res) {
    res.sendFile(path.join(__dirname + '/greeting_cn.html'));
});
mark.use((req, res, next) => {
    console.log("Where are you going?");
    res.status(404).send("Where are you going?");
});
/* And more pages here :) */
mark.listen(3030);
console.log('Running at Port 3030');