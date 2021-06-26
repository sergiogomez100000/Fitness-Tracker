//import npms
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = process.env.PORT ||3000;
//use logger
// const logger = require('morgan');
// app.use(logger("dev"));

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use static files
app.use(express.static("public"));


mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/WorkoutDB',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.use(require('./routes/apiRoutes.js'))
app.use(require('./routes/viewRoutes.js'))


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}..`);
})