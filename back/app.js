require('dotenv').config();
const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./middlewares/errorHandler");
const { notFoundHandler } = require("./middlewares/notFoundHandler");

const app = express();

// CORS
app.use(cors());

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
app.use("/card", require("./routes/cardRoutes"));

// Handlers
app.all("*", notFoundHandler);
app.use(errorHandler);

app.listen(process.env.PORT || 3001, () => {
    console.log(`http://localhost:${3000}`);
});
