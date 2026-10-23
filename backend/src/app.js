const express = require('express');

const app = express();

app.use("/",(req,res) => {
    res.send("Namaste! Sandeep ");
});

app.use("/test",(req,res) => {
    res.send("Hello from the server!");
});

app.use("/hello",(req,res) => {
    res.send("helo helo helo");
});

app.listen(7777, () => {
    console.log("server is successfully listening 0n port 7777...");
});

