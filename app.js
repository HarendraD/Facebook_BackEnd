const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000;
app.use(express.json());
const users = require("./routes/users")
const posts = require("./routes/posts")

const url = "mongodb://127.0.0.1/facebookDb";
mongoose.connect(url,{useNewUrlParser:true});
const con = mongoose.connection;

con.on("open",()=>{
    console.log("DataBase Connected");
})

app.use("/users",users);
app.use("/posts",posts);

app.listen(port,()=>{
    console.log("App Running");
})