import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import cors from "cors";
import controllers from "./controllers/controllers.js";
import { data } from "./data/index.js";

const app = express();
const PORT = 5001;
const JWT_SECRET = "_wtr_hola"; // Use a strong, secure key in production

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

// has passwd
const generarHash = async () => {
  const passwordOriginal = "1234";
  const saltRounds = 10; // Nivel de complejidad para el hash

  const hash = await bcrypt.hash(passwordOriginal, saltRounds);
  console.log("Contraseña original:", passwordOriginal);
  console.log("Hash generado:", hash);
};

// Middleware: Verify Token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "Unauthorized" });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

// Routes
app.post("/signIn", async (req, res) => {
  const { email, password } = req.body;
  const user = data.find((u) => u.email === email);
  if (!user) return res.status(404).json({ message: "User not found" });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid)
    return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1m" });
  res.status(200).json({ token });
});

app.get("/protected", verifyToken, (req, res) => {
  res.status(200).json({ message: "Protected data accessed", user: req.user });
});

app.get("/", async (req, res) => {
  await generarHash();
  res.status(200).json({ info: "Node.js, Express, and Postgres API" });
});

app.get('/users', controllers.getUsers);
app.post('/users', verifyToken, controllers.createUser);

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
