import { useEffect, useState } from "react";
import BASE_URL from "../api";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/gallery`)
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <>
      <Header />

      {/* SAME BG (NO CHANGE) */}
      <div
        className="pt-24 min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        {/* overlay halka rakha taki bg visible rahe */}
        <div className="min-h-screen w-full px-6 md:px-16 py-12">

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-14">
            📸 Our Gallery
          </h2>

          {/* FULL WIDTH GRID FIX */}
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

              {images.map((img) => (
                <div
                  key={img._id}
                  onClick={() => setSelectedImage(img.imageUrl)}
                  className="group cursor-pointer"
                >
                  {/* CARD */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-purple-500/40">

                    {/* Image */}
                    <img
                      src={img.imageUrl}
                      alt=""
                      className="w-full h-60 object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                      <p className="text-white font-semibold">
                        View Image
                      </p>
                    </div>

                    {/* Bottom gradient */}
                    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3 text-white text-center text-sm">
                      Gallery Image
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* LIGHTBOX */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          >
            <img
              src={selectedImage}
              alt=""
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
            />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Gallery;