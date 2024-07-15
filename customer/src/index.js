const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (request, response, next) => {
  return response
    .status(200)
    .json({ message: "Customer service is up and running!" });
});

app.listen(8001, () => {
  console.log("Customer service is listening on port 8001");
});
