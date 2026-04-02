import { useEffect } from "react";

export default function EnquiryPopup({ onClose }) {

  // ESC key close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Call function
  const handleCall = () => {
    window.location.href = "tel:+916390181919";
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>

        {/* Close Button */}
        <button style={styles.close} onClick={onClose}>×</button>

        <h2 style={styles.title}>📩 Enquiry Details</h2>

        <div style={styles.infoBox}>
          <p><strong>📞 Phone:</strong></p>
          <p style={styles.sub}>+91 6390181919</p>
          <p style={styles.sub}>+91 6391181919</p>

          <p><strong>📧 Email:</strong></p>
          <p style={styles.sub}>kidzeeakbarpur@gmail.com</p>

          <p><strong>📍 Address:</strong></p>
          <p style={styles.sub}>
            697, Shastri Nagar, Akbarpur,<br />
            Ambedkar Nagar, Uttar Pradesh 224122
          </p>
        </div>

        <button style={styles.callBtn} onClick={handleCall}>
          📞 Call Now
        </button>

      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999
  },

  card: {
    background: "linear-gradient(135deg, #E0F7FA, #FFF9C4)",
    padding: "30px",
    borderRadius: "18px",
    width: "370px",
    textAlign: "center",
    position: "relative",
    boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
    animation: "fadeIn 0.3s ease"
  },

  close: {
    position: "absolute",
    top: "12px",
    right: "15px",
    border: "none",
    background: "transparent",
    fontSize: "22px",
    cursor: "pointer",
    color: "#555"
  },

  title: {
    marginBottom: "20px",
    color: "#0288D1",
    fontWeight: "600"
  },

  infoBox: {
    textAlign: "left",
    marginBottom: "25px",
    lineHeight: "1.6",
    fontSize: "14px",
    color: "#333"
  },

  sub: {
    marginLeft: "10px",
    marginBottom: "8px",
    color: "#555"
  },

  callBtn: {
    background: "linear-gradient(135deg, #0288D1, #00ACC1)",
    color: "#fff",
    border: "none",
    padding: "12px 25px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "500",
    transition: "0.3s"
  }
};