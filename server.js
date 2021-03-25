// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;
const server = app.listen(port, listening);
function listening(){
    console.log(`port number: ${port}`);
}

app.get('/all',getData);
function getData(req,res)
{
    res.send(projectData);
};

app.post('/addData', addData );
function addData(req,res){
    projectData['date'] = req.body.date;
    projectData['temp'] = req.body.temp;
    projectData['user_response'] = req.body.user_response;
    response.end();
    // projectData.push(req.body);
}