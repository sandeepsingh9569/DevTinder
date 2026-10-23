const express = require('express');

const app = express();

app.get("/user/:userId/:name/:password", (req,res) => {
    console.log(req.params);
res.send({firstname: "Sandeep", lastName: "Singh"})
});

app.listen(7777, () => {
    console.log("server is successfully listening 0n port 7777...");
});
