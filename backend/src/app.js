const express = require('express');

const app = express();


app.get("/getUserData",  (req, res) => {
    // try {
 // logic of DB call and get user data
   throw new Error("ashjbdvgcx")
   res.send ("User data sent");
    //
    // catch (err) {
    // res.status(500).send("Some Error content support team");
    // }
});

app.use("/", (err, req, res, next) => {
if(err){
    // log your error 
    res.status(500).send("something want wrong");
}
});




app.listen(7777, () => {
    console.log("server is successfully listening 0n port 7777...");
});
