const express = require("express");
const ModuleConst = require("./const");

const { data } = ModuleConst;

const app = express();

app.use(express.json());

const PORT = 3001;

app.listen(PORT, () => {
  console.log("Server Listening on PORT: ", PORT);
});

const ProcessingFindUsers = (request, response) => {
  const { idUser } = request.params;
  if (!idUser) {
    return response.send({
      status: true,
      data,
    });
  }

  const user = data.find((e) => e.id === idUser);

  response.send({
    status: true,
    idUser,
    user,
  });
};

app.get("/findUsers/:idUser", ProcessingFindUsers);
app.get("/findUsers", ProcessingFindUsers);
