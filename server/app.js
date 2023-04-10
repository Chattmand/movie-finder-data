const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
const titleQueries = {}


const app = express();
app.use(morgan('dev'))
app.get('/', (req, res)=>{
    let path = req.url
    console.log(req.url)
    if (path === '/'){
        console.log('Hello')
    }
    if(titleQueries[path]){
        console.log('getting movie from titleQueries')
        res.json(titleQueries[path])
    }
    axios
    .get('https://www.omdbapi.com' + path + '&apikey=5f0280d0')
    .then(function (response) {
        var data = response.data
        titleQueries[path] = data
        res.status(200).json(data)
    })
    
    .catch(function(error){
        res.status(200).json(error.message)
    })
    
});


module.exports = app;
