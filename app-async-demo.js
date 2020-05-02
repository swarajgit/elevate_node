
const request = require('request');

function getAPI() {
    request('https://www.google.com/', (err, res, body) => {
        if (err) {
            return console.log(err)
        }
        console.log("Status :  " + res.statusCode);
    })

    console.log("Method ends here!!")
}

