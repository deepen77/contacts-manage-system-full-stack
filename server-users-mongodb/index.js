// import modules
const express = require("express");
const { json, urlencoded } = express;
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const credentials = require("./middlewares/credentials");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");

// app
const app = express();

// db
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERROR", err));

// middleware
app.use(morgan("dev"));
app.use(credentials);
app.use(cors(corsOptions));
//app.use(cors({ origin: true, credentials: true }));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());

// routes
const userRoutes = require("./routes/user");
app.use("/", userRoutes);

// port
const port = process.env.PORT || 8080;

// listener
const server = app.listen(port, () =>
	console.log(`Server is running on port ${port}`)
);
