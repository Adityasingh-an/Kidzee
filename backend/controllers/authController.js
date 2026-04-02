exports.login = async (req, res) => {
  const { email, password } = req.body;

  // 🔥 Hardcoded admin
  if (email === "admin@gmail.com" && password === "123456") {
    return res.json({ token: "admin-login-success" });
  }

  return res.status(400).json({ message: "Invalid email or password ❌" });
};