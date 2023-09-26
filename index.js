//Matthew Barhou, 301193037, 2023-09-09

//Import modules and set up express
import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
const app = express();

//Use body-parser to log the form inputs to the console
app.use(bodyParser.urlencoded({ extended: true }));


//Set up ejs and set the public folder to be static
app.set('view engine', 'ejs');
app.use(express.static("public"));



//Activate all routes to each ejs page and render the content

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/services", (req, res) => {
    res.render("services");
});

app.get("/projects", (req, res) => {
    res.render("projects");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/about", (req, res) => {
    res.render("about");
});

//Capture the form data and log it to the console on submit
app.post("/contact", (req, res) => {

    console.log(req.body.fName, req.body.lName, req.body.email, req.body.phone, req.body.password);
    res.redirect("/");

});



app.listen(3000, () => {
    console.log("Server started on port 3000");
});