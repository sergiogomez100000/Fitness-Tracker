//import npms
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 7500;

//use logger
// app.use(logger("dev"));
// const logger = require('morgan');

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use static files
app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });


require('./routes/api-routes')(app)
require('./routes/html-routes')(app)


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}..`);
})