const express = require("express");
const path = require("path");
const { controller } = require("./utils/functions");

const app = express();

app.use(express.static(path.join(__dirname, "/client")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "index.html"));
});

app.get("/api/db2", async (req, res) => {
  res.send(await controller("DB2", "Asia_Table"));
});

app.get("/api/db1", async (req, res) => {
  res.send(await controller("DB1", "Nouth South America"));
});

app.listen(3000, () => {
  console.log("app is running");
});
