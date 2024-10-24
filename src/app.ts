import express from "express";

const app = express();

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use(express.static("public"));

app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});

