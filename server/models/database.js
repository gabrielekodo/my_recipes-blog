const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Database connection error:"));
db.once("open", function () {
  console.log("Database Connected");
});

// Models
require("./Category");
require("./Recipe");
