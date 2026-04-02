import { useState } from "react";

function AdminVideo() {
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("video", video);
    formData.append("title", title);

    const res = await fetch("http://localhost:5000/api/videos/upload", {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    if (data.message) {
      alert("Video Uploaded ✅");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Upload Video 🎥</h2>

      <input
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      /><br /><br />

      <input
        type="file"
        onChange={(e) => setVideo(e.target.files[0])}
      /><br /><br />

      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default AdminVideo;