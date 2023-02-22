const express = require("express");
const app = express();

app.get("/home", (req,res) => {
    const name = "Samiratou";
    const age = 30;
    const numbers = [1, 2, 3, 4, 5];
    res.render("index.ejs", {nom: name, age: age, nombres: numbers});
});

app.get("/contact", (req,res) => {
    res.send("<h1>First project</h1><br><a href='/about'>About</a>");
});

app.get("/about", (req,res) => {
    res.render("about.ejs");
});

app.get("*", (req, res) => {
    res.render("404.ejs");
});


app.listen(5000, () => {
   console.log("Server started on port 5000"); 
});