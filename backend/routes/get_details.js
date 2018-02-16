var express = require('express');
var main_router = express.Router();
const async = require('async');
const request = require('request');

main_router.route('/')
.get(function (req, res) {

function httpGet(url, callback) {
  const options = {
    url :  url,
    json : true
  };
  request(options,
    function(err, res, body) {
      callback(err, body);
    }
  );
}


urls = [
"http://localhost:3010/alm/build_tool",
"http://localhost:3010/alm/development_tool",
"http://localhost:3010/alm/project_architecture",
"http://localhost:3010/alm/project_background",
"http://localhost:3010/alm/project_mgmt",
"http://localhost:3010/alm/project_team",
"http://localhost:3010/alm/srcmgmt_tool",
"http://localhost:3010/alm/unit_testing",
"http://localhost:3010/alm/deployment_release"
];

var test = async.map(urls, httpGet, function (err, data){
  if (err) return console.log(err);
  //console.log(res);
  res.send(data);
});
//res.send(test);
});





/*

var responses = [];

main_router.route('/')
.get(function (req, res) {

    var test = async.each(urls, http.get, function(err, responses, callback){
  if (err){
    // handle error
  }
  else {
    
    return responses;    
  }

})
res.send(test);
res.end();
});



/*

main_router.route('/')
.get(function (req, res) {

    request('http://localhost:3010/alm/build_tool', function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }
    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }
    //All is good. Print the body
    
    console.log("all_body" + body);
    
    all_body += body;
    //all_body.push(body);
    //return JSON.stringify(body);

});


/*request('http://localhost:3010/alm/development_tool', function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }
    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }
    //All is good. Print the body
    console.log(body);
    all_body.push(body);

    });

request('http://localhost:3010/alm/project_architecture', function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }
    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }
    //All is good. Print the body
    console.log(body);
    all_body.push(body);
    });

request('http://localhost:3010/alm/project_background', function (error, response, body) {
    //Check for error
    if(error){
        return console.log('Error:', error);
    }
    //Check for right status code
    if(response.statusCode !== 200){
        return console.log('Invalid Status Code Returned:', response.statusCode);
    }
    //All is good. Print the body
    console.log(body);
    all_body.push(body);

    });

  res.send("res sent: " + all_body);
});

*/

module.exports = main_router;
