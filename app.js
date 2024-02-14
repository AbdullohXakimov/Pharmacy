const express = require("express");

const dotenv = require("dotenv").config();

const PORT = process.env.PORT || 3030;

const app = express();
app.use(express.json());

const mainRouter = require("./routes/index");

app.use(mainRouter);

app.listen(PORT, console.log(`SERVER STARTED AT LOCALHOST:${PORT}`));
