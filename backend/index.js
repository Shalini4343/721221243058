const express = require('express');
const dotenv = require('dotenv');
const app = express();
app.listen(3000)
const server = function(){
    setTimeout((req) => {
        console.log("done");
    }, 3000);
}