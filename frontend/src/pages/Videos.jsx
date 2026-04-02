import { useEffect, useState } from "react";
import BASE_URL from "../api";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Video() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/videos`)
      .then(res => res.json())
      .then(data => {
        console.log("VIDEOS 👉", data); // debug
        setVideos(data);
      });
  }, []);

  return (
    <>
      <Header />

      <div
        className="pt-24 min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="min-h-screen w-full px-6 md:px-16 py-12">

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-14">
            🎬 Our Videos
          </h2>

          {/* GRID SAME AS GALLERY */}
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

              {videos.map((vid) => (
                <div
                  key={vid._id}
                  onClick={() => setSelectedVideo(vid.videoUrl)}
                  className="group cursor-pointer"
                >
                  {/* CARD */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-purple-500/40">

                    {/* VIDEO PREVIEW */}
                    <video
                      src={vid.videoUrl}
                      className="w-full h-60 object-cover"
                      muted
                    />

                    {/* HOVER OVERLAY */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                      <div className="text-white text-3xl">▶</div>
                    </div>

                    {/* BOTTOM TEXT */}
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3 text-white text-center text-sm">
                      Video Clip
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* FULLSCREEN VIDEO */}
        {selectedVideo && (
          <div
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
          >
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
            />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Video;