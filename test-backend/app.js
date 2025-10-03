const express = require("express");

const app = express();
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

app.get("/status/:idUser", (request, response) => {
  const { idUser } = request.params;
  const status = {
    Status: "Running",
    idUser,
  };

  response.send(status);
});
