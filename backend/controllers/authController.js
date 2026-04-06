const jwt = require("jsonwebtoken");

// 🔐 Login Controller
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ❌ validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email aur password required hai ❌"
      });
    }

    // 🔥 Hardcoded admin (abhi ke liye)
    if (email === "admin@gmail.com" && password === "123456") {

      // 🔑 Token generate
      const token = jwt.sign(
        { email },
        "mysecretkey", // later env me daal dena
        { expiresIn: "1d" }
      );

      return res.json({
        success: true,
        token: token,
        message: "Login successful ✅"
      });
    }

    // ❌ wrong credentials
    return res.status(401).json({
      success: false,
      message: "Invalid email or password ❌"
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error ⚠️"
    });
  }
};