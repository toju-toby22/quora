//Create server With Express framework
// Get request to view that the express is working

// the / means the home page when you run the resqust with port 4000

//TEMPLATE ENGINE-: Is an engine that can be configures with node and express to help display or render HTML files
// TYEPS:
//1) Handlebars
//2) Ejs
//3) Pug

//Install Express Handlebars- Configures the express to view  html pages
//Install Handlebars -- Helps view html pages
//Install Body-parser - Helps export files in Json format


const express = require('express') //  1) Importing Express Libary
const app = express() // 2) Initializing the express libary
// const expressHandlebars = require('express-handlebars') // 3) Import the handel bars
const bodyParser = require('body-parser');// 4) Import the body parser
const path = require('path')
const apiRoutes = require("./routes/Api-routes")
const SignupRoutes = require("./routes/Signup")
const mongoose = require('mongoose')
const cors = require('cors')


//Exress configuration
//------------------------------------
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(express.json());
//Allows any request from any api to access your device
app.use(cors({ origin: '*'}))




app.use("/api", apiRoutes);
app.use("/signup", SignupRoutes);

// app.use("/create-products", adminRoutes);



 mongoose.connect("mongodb://localhost/quoradb",
    { useNewUrlParser: true, useUnifiedTopology: true, family: 4 }, 
    err => {
        if (err) throw err;
        console.log("Quora db connected")
        // finds a database called website_db, if it does not exist. it will create the datatbase it self
    });
mongoose.Promise = global.Promise;

const port = 3013
app.listen(port, () => {
    console.log( `Running ${port}`)
})