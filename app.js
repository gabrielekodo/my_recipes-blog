const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const fileUpload = require("express-fileupload");
const session = require("express-session");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 5000;

require("dotenv").config();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);
app.use(cookieParser("SecureBlog"));
app.use(
  session({
    secret: "SecretSessionForthisBlog",
    saveUninitialized: true,
    resave: true,
  })
);
app.use(flash());
app.use(fileUpload());
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

const routes = require("./server/routes/recipeRoutes");

app.use("/", routes);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
