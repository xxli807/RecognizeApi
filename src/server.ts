const path = require("path");
const express = require("express");

const app = express();
const port = process.env.PORT || "4000";

app.get("/", (req: any, res:any) => {
  res.status(200).send("node server to handle server survey");
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});