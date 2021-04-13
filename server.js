const mongoose = require("mongoose");

const User = require("./User.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbExample", { useNewUrlParser: true });
