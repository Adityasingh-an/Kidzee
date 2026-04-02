import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BASE_URL from "../api";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}/notices`)
      .then((res) => res.json())
      .then((data) => {
        console.log("DATA 👉", data);
        setNotices(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const toggleNotice = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />

      <div className="flex-grow pt-[100px] px-4 md:px-10 flex justify-center">
        
        <div className="w-full max-w-4xl backdrop-blur-xl bg-white/70 border border-white/30 rounded-3xl shadow-2xl p-8">

          {/* TITLE */}
          <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-8 tracking-wide">
            📢 Notice Board
          </h1>

          {/* LIST */}
          <div className="space-y-5">
            {notices.length > 0 ? (
              notices.map((note, index) => (
                <div
                  key={note._id}
                  className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
                >

                  {/* TITLE BAR */}
                  <div
                    onClick={() => toggleNotice(index)}
                    className={`cursor-pointer px-5 py-4 flex justify-between items-center transition-all duration-300
                    ${
                      activeIndex === index
                        ? "bg-gradient-to-r from-purple-700 to-indigo-600 text-white"
                        : "bg-white text-gray-800 hover:bg-purple-50"
                    }`}
                  >
                    <span className="font-semibold text-lg">
                      {note.title || "No Title"}
                    </span>

                    <span className="text-2xl font-bold">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </div>

                  {/* DESCRIPTION */}
                  <div
                    className={`px-5 overflow-hidden transition-all duration-500 ease-in-out ${
                      activeIndex === index
                        ? "max-h-40 py-4 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-700 leading-relaxed">
                      {note.message || note.description || "No Description"}
                    </p>
                  </div>

                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 text-lg">
                🚫 No notices available
              </p>
            )}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Notice;