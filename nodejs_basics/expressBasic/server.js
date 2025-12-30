const express = require("express");

const app = express();

// JSON Body parsing automatically
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.get("/users", (req, res) => {
  res.json([{ name: "Vivek" }]);
});

app.get("/health", (req, res) => {
    res.json({ status: "OK" });
    }
);  

app.listen(3000, () => console.log("Express running on 3000"));
