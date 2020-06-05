const express = require("express");
const port = 2001;

const app = express();


app.listen(port, function(err){
    if(err)
    {
        console.log("error",err);
        return;
    }
    console.log("Server is Successfully Setup and Running on the Port:",port);
})