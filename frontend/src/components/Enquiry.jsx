import { useEffect } from "react";

export default function EnquiryPopup({ onClose }) {

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleCall = () => {
    window.location.href = "tel:+916390181919";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/916390181919", "_blank");
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>

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

        <div style={styles.btnGroup}>
          <button style={styles.callBtn} onClick={handleCall}>
            📞 Call
          </button>

          <button style={styles.whatsappBtn} onClick={handleWhatsApp}>
            💬 WhatsApp
          </button>
        </div>

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
    background: "rgba(0,0,0,0.65)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
   
  },

  card: {
    background: "linear-gradient(145deg, #e6f7ff, #fff8dc)",
    padding: "30px",
    borderRadius: "20px",
    width: "380px",
    textAlign: "center",
    position: "relative",
    boxShadow: `
      10px 10px 25px rgba(0,0,0,0.2),
      -10px -10px 25px rgba(255,255,255,0.8)
    `,
    transform: "perspective(1000px) rotateX(3deg)",
    animation: "popupFade 0.4s ease"
  },

  close: {
    position: "absolute",
    top: "12px",
    right: "15px",
    border: "none",
    background: "transparent",
    fontSize: "22px",
    cursor: "pointer",
    color: "#444"
  },

  title: {
    marginBottom: "20px",
    color: "#0077b6",
    fontWeight: "700"
  },

  infoBox: {
    textAlign: "left",
    marginBottom: "25px",
    lineHeight: "1.7",
    fontSize: "14px",
    color: "#333"
  },

  sub: {
    marginLeft: "10px",
    marginBottom: "8px",
    color: "#555"
  },

  btnGroup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px"
  },

  callBtn: {
    flex: 1,
    background: "linear-gradient(135deg, #0077b6, #00b4d8)",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
  },

  whatsappBtn: {
    flex: 1,
    background: "linear-gradient(135deg, #25D366, #128C7E)",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.3s",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
  }
};