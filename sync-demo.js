const request = require('sync-request');

function getAPI() {
    var res = request('GET', 'http://target.com');
    console.log("Status : " + res.statusCode);

    console.log("Method ends here!!")

}