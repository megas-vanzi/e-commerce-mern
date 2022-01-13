const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Users.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          req.session._id = user._id;
          req.session.name = user.username;
          const token = jwt.sign({ user: user }, "secret", { expiresIn: "1h" });
          res.json({ token, id: req.session._id, name: req.session.name });
        } else {
          res.json({ error: "Invalid data" });
        }
      });
    } else {
      res.json({ error: "Invalid data" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

const logout = (req, res) => {
  try {
    //TODO
  } catch (error) {
    res.json("Error logout");
  }
};
