import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import cors from "cors";

// inyectar las keys o valores de los secretos
import { PORT } from "./keys/keys.js";

// Módulos importados
import { SingIn } from "./controllers/signin.js";
import { SingUp } from "./controllers/signup.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Routes
app.post("/signin", SingIn);
app.post("/signup", SingUp);

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
