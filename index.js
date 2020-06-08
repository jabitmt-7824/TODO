const express = require("express");
const port = 1001;

const db = require("./config/mongoose");

const toastr = require("express-toastr");


const app = express();

app.use(express.static("./assets"));



app.set("view engine", "ejs");
app.set("views","./views");

app.use(toastr());

app.use(express.urlencoded({extended: true}));

app.use("/", require("./routes/index"));

app.listen(port, function(err){
    if(err)
    {
        console.log("error",err);
        return;
    }
    console.log("Server is Successfully Setup and Running on the Port:",port);
})