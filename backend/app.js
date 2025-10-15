import express from "express";
import cors from "cors";
import { data } from "./const.js";

const app = express();

app.use(express.json());

const PORT = 3001;

// app.use(cors());

const specificCorsOptions = {
  origin: 'http://localhost:5173', // Only allow requests from this origin
  methods: 'GET', // Only allow GET method
  credentials: true, // Allow cookies to be sent
};

app.listen(PORT, () => {
  console.log("Server Listening on PORT: ", PORT);
});

const ProcessingFindUsers = (request, response) => {
  const { param } = request.params;
  if (!param) {
    return response.send({
      status: true,
      data,
    });
  }

  if (String(param) === "female") {
    const users = data.filter((e) => e.gender === String(param));

    return response.send({
      status: true,
      genderSearch: param,
      users,
      length: users.length
    });
  }

  const idUser = param;
  const user = data.find((e) => e.id === idUser);

  response.send({
    status: true,
    param,
    user,
  });
};

app.get("/findUsers", cors(specificCorsOptions), ProcessingFindUsers);
app.get("/findUsers/:param", ProcessingFindUsers);
