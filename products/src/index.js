const express = require("express");

const app = express();

app.use(express.json());

app.use("/", (request, response, next) => {
  return response
    .status(200)
    .json({ message: "Product service is up and running!" });
});

app.listen(8002, () => {
  console.log("Product service is listening on port 8002");
});
