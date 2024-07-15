const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (request, response, next) => {
  return response
    .status(200)
    .json({ message: "Shopping service is up and running!" });
});

app.listen(8003, () => {
  console.log("Shopping service is listening on port 8003");
});
