const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
require("dotenv").config();


app.use(cors());
app.use(express.json());


// routes
const contactsRoutes = require("./routes/contacts");
app.use("/", contactsRoutes);



const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});
