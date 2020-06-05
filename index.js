const express = require("express");
const port = 1001;

const app = express();

app.use(express.static("./assets"));

app.use("/", require("./routes/index"));

app.set("view engine", "ejs");
app.set("views","./views");

app.listen(port, function(err){
    if(err)
    {
        console.log("error",err);
        return;
    }
    console.log("Server is Successfully Setup and Running on the Port:",port);
})