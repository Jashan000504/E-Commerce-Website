const express = require('express');
const app = express();
const port = 8000;
app.get("/", (req, res) => {
    return res.send("hello world");
});

app.get("/admin", (req, res) => {
    return res.send("You are visiting admin dashboard");
});


app.get("/sign", (req, res) => {
    return res.send("You are visiting loginpage");
});
app.listen(port, () => {
    console.log("server is up and running");
});
