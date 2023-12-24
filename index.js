const express = require('express');
const app = express();

//load config from env file
require('dotenv').config()
const port = process.env.PORT || 4000

//middleware 
app.use(express.json());

//mounting
const blogRoutes = require('./routes/blog.js');
app.use('/api/v1', blogRoutes);

//start server
app.listen(port, () => {
    console.log(`server started successfully at ${port}`);
})

//connect to the database
const DBconnected = require('./config/database.js');
DBconnected();

//Default Route
app.get('/', (req, res) => {
    res.send(`<h1>This is Home Page Baby!!!</h1>`)
})