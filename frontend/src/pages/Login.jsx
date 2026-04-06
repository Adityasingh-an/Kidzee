import { useState } from "react";
import BASE_URL from "../api";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("token", data.token);

        alert("Login Success ✅");

        // redirect to admin panel
        window.location.href = "/admin";
      } else {
        alert(data.message || "Login Failed ❌");
      }

    } catch (err) {
      console.log(err);
      alert("Server Error ⚠️");
    }
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={{ marginBottom: "20px" }}>Admin Login</h2>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleLogin} style={btnStyle}>
          Login
        </button>
      </div>
    </div>
  );
}

// 🎨 styles
const containerStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "url('/bg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

const boxStyle = {
  background: "rgba(255,255,255,0.95)",
  padding: "40px",
  borderRadius: "15px",
  width: "320px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  textAlign: "center"
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  outline: "none"
};

const btnStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "none",
  background: "#7C3AED",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer"
};

export default Login;