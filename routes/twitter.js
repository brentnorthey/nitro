var express = require('express');
var router = express.Router();
var request = require('request');
var Twitter = require('twitter');

var debug = require('debug')('twitter');

var client = new Twitter({
    consumer_key: 'LvsbbDNs4RaV0g6Bpf4unhrFR',
    consumer_secret: 'cplmam4NJq7xR9lxljaJoEgpSaPDJ4kJmclg5tFH2nIqkMPboz',
    access_token_key: '18027469-NLYBQ7Jb5gY84dGrIHFkSXOExgUVqeRDwP251BqDJ',
    access_token_secret: 'OQtu9toGH0q8w0yZIqSyvxTjDqKbAHy31o3aKuAV8JlqJ'
});

router.post('/post', function(req, res) {

	var path = req.query.path;
    var url = baseURL + path;
    var requestData = req.body;

    request({
        url: url,
        method: "P0ST",
        json: true,
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(requestData)
    }
    , function (error, response, body) {
        if (!error && response.statusCode === 200 || response.statusCode === 201) {
            res.status(200).send(body);
        } else {
            console.log(error);
            debug(response);
            res.status(500).send(body);
        }
    });
});

router.get('/token', function(req, res) {
    var path = req.query.path;
    var screenName = req.query.params;
    var params = {screen_name: screenName};

    client.get(path, params, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
            res.status(200).send(tweets);
        } else {
            console.log('no tweets for you');
            res.status(500).send(body);
        }
    });
});

router.get('/get', function(req, res) {

    var path = req.query.path;
    var url = baseURL + path;
    var requestData = req.body;

    request({
            url: url,
            method: "GET",
            json: true,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(requestData)
        }
        , function (error, response, body) {
            if (!error && response.statusCode === 200 || response.statusCode === 201) {
                res.status(200).send(body);
            } else {
                console.log(error);
                debug(response);
                res.status(500).send(body);
            }
        });
});

module.exports = router;