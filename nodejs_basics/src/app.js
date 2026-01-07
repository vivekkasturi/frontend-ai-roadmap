const express = require("express");
const userRoutes = require("./routes/user.routes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

// ROUTES
app.use("/users", userRoutes);

// GLOBAL ERROR HANDLER
app.use(errorHandler);

module.exports = app;
