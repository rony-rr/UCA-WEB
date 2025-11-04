import { db } from "../data/connection.js";

// $1, $2, $3
// [param1, param2, param3]

// [param1 = $1, param2 = $2, param3 = $3]

export const SingIn = async (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT * FROM users WHERE email = $1', [email], async (error, results) => {
    if (error) {
      throw error
    }

    const resultFind = results.rows;
    if(resultFind.length < 1)
        return res.status(400).json({ message: "Invalid user find" });


    res.status(200).json(resultFind[0]);

    // const isPasswordValid = await bcrypt.compare(password, user.password);
    // if (!isPasswordValid)
    //     return res.status(400).json({ message: "Invalid credentials" });

    // res.status(200).json(results.rows);
  });
//   const user = users.find((u) => u.email === email);
//   if (!user) return res.status(404).json({ message: "User not found" });

  

//   const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });
//   res.status(200).json({ token });
};
