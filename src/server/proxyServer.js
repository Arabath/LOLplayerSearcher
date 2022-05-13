var express = require('express');
var cors = require('cors');
const axios = require('axios');

var app = express();

app.use(cors());

const API_KEY = "RGAPI-7d605235-8f29-4211-ad21-4678c6ef427e";

app.listen(4000, function() {
    console.log("Server started at port 4000")
})