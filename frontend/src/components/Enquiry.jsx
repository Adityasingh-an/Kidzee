import { useEffect } from "react";

export default function EnquiryPopup({ onClose }) {

  // ESC key se close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div style={styles.overlay}>
      <div style={styles.card}>
        
        {/* Close Button */}
        <button style={styles.close} onClick={onClose}>×</button>

        <h2 style={styles.title}>📩 Enquiry Details</h2>

        <div style={styles.infoBox}>
          <p><strong>📞 Phone:</strong> +91 9876543210</p>
          <p><strong>📧 Email:</strong> kidzee@gmail.com</p>
          <p><strong>📍 Address:</strong> Civil Lines, Prayagraj, UP</p>
        </div>

        <button style={styles.callBtn}>Call Now</button>
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
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "15px",
    width: "350px",
    textAlign: "center",
    position: "relative",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
  },
  close: {
    position: "absolute",
    top: "10px",
    right: "15px",
    border: "none",
    background: "transparent",
    fontSize: "22px",
    cursor: "pointer"
  },
  title: {
    marginBottom: "20px",
    color: "#7C3AED"
  },
  infoBox: {
    textAlign: "left",
    marginBottom: "20px",
    lineHeight: "1.8"
  },
  callBtn: {
    background: "#7C3AED",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer"
  }
};