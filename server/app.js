//Create a storage array
//idirate thru objects to find what was searched and if found in storage array return to user 
//use API to get the object if it hasnt been searched before
//return info gotten from API to user 
//once info is pulled from API push it into the storage array  

var express = require('express');
const axios = require('axios');
var titleQueries = {}
var idQueries = {}
//for (let i =0; i < 0; i++){
    
//}

var app = express();
app.get('/', (req, res)=>{
    let path = req.url
    console.log(path)
    var movieTitle = req.query.t;
    var movieId = req.query.i;
    if (movieId != undefined){
        if(idQueries[movieId] != undefined){
            res.send(idQueries[movieId])
        } 
        // else {
        //     axios.get('https://www.omdbapi.com/?i=' + movieId + '&apikey=85f9dc34')
        //         .then(function (response) {
        //             res.send(response.data) 
        //             //console.log(response);
        //             idQueries[movieId] = response.data
        //         });
                
        // }
    }
    // else if(movieTitle != undefined){
    //     if (titleQueries[movieTitle] != undefined){
    //         res.send(titleQueries[movieTitle])
    //     }
    //     else {
    //         axios.get('https://www.omdbapi.com/?t=' + movieTitle + '&apikey=85f9dc34')
    //             .then(function (response) {
    //                 res.send(response.data) 
    //                // console.log(response);
    //                 titleQueries[movieTitle] = response.data
    //             });
    //     }
    // }
    //res.send(req.query)


    
});

// When making calls to the OMDB API make sure to append the '&apikey=8730e0e' parameter

module.exports = app;
