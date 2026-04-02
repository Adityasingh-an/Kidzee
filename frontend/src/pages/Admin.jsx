import { Link } from "react-router-dom";

function Admin() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar */}
      <div style={{
        width: "220px",
        background: "#7C3AED",
        color: "white",
        padding: "20px"
      }}>
        <h2>Admin Panel</h2>

        <div style={{ marginTop: "30px" }}>
          <Link to="/admin" style={linkStyle}>🏠 Dashboard</Link>
          <Link to="/admin/gallery" style={linkStyle}>📸 Manage Gallery</Link>
          <Link to="/admin/videos" style={linkStyle}>🎥 Manage Videos</Link>
          <Link to="/admin/notice" style={linkStyle}>📝 Manage Notices</Link>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, padding: "40px" }}>
        <h1>Welcome Admin 👋</h1>

        <p style={{ marginTop: "10px", color: "#555" }}>
          Select an option from sidebar to manage content.
        </p>

        {/* Logout */}
        <button
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
          style={{
            marginTop: "30px",
            padding: "10px 15px",
            background: "red",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px"
          }}
        >
          Logout
        </button>
      </div>

    </div>
  );
}

// 🔥 link style (clean UI)
const linkStyle = {
  display: "block",
  color: "white",
  textDecoration: "none",
  margin: "12px 0",
  fontWeight: "bold"
};

export default Admin;