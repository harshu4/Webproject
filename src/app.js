const express = require("express");
const path= require("path");
const hbs = require('hbs');
const app = express() ;
const port = process.env.PORT || 8000;

// public static path

 //console.log(path.join(__dirname,"../public"));

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.set('view engine', 'hbs');
app.set('views', templates_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));



// routing
// app.get("route", callback)

app.get("", (req, res) => {
   // res.send("welcome to my website");
   res.render("index"); 
});

app.get("/about", (req, res) => {
    // res.send("Welcome to my AboutUs website");
    res.render("about");
});

app.get("/weather", (req, res) => {
    // res.send("Welcome to my weather website");
    res.render("weather");
});

app.get("*", (req, res) => {
   // res.send("404 error page Oops");
   res.render("404error", {
       errorMsg: "Oops! Page Not Found"
   });
   
});


app.listen(port, () => {
    console.log(`Listning to the port at ${port}`);
});