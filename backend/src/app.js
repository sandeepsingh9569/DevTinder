const express = require('express');

const app = express();

const { adminAuth, userAuth} = require('./middlewares/auth');


app.use("/admin", adminAuth);

app.post("/user/login", (req, res) => {
    res.send("User logged in successfully!");
})


app.get("/user/data", userAuth, (req, res) => {
   res.send ("User data sent");
});

app.get("/admin/getAlldata", (req, res) => {
   res.send ("All data sent");
});
   

app.get("/admin/deleteUser", (req, res) => {
 res.send("Deleted a user");   
});

app.listen(7777, () => {
    console.log("server is successfully listening 0n port 7777...");
});
