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

      <div className="flex-grow pt-[90px] px-4 md:px-10 flex justify-center">
        
        {/* 🔥 NOTICE BOARD */}
        <div className="w-full max-w-4xl bg-yellow-100 border-[8px] border-yellow-700 rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.25)] p-8">

          {/* TITLE */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 tracking-wide">
            📢 Notice Board
          </h1>

          <div className="space-y-4">
            {notices.length > 0 ? (
              notices.map((note, index) => {

                const isLatest = index === 0;

                return (
                  <div
                    key={note._id}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden border border-gray-200"
                  >

                    {/* HEADER */}
                    <div
                      onClick={() => toggleNotice(index)}
                      className={`cursor-pointer px-5 py-4 flex justify-between items-center transition-all
                      ${
                        activeIndex === index
                          ? "bg-purple-600 text-white"
                          : "bg-gray-50 text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-3">

                        <span className="font-medium text-base">
                          {note.title || "No Title"}
                        </span>

                        {/* NEW BADGE */}
                        {isLatest && (
                          <span className="bg-green-500 text-white text-[10px] px-2 py-[2px] rounded-full">
                            NEW
                          </span>
                        )}
                      </div>

                      <span className="text-xl font-bold">
                        {activeIndex === index ? "−" : "+"}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div
                      className={`px-5 overflow-hidden transition-all duration-400 ${
                        activeIndex === index
                          ? "max-h-60 py-4 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-700 text-sm leading-relaxed mb-2">
                        {note.message || note.description || "No Description"}
                      </p>

                      {/* DATE */}
                      <p className="text-xs text-gray-500">
                        📅 {new Date(note.createdAt).toLocaleString("en-IN", {
                          dateStyle: "medium",
                          timeStyle: "short"
                        })}
                      </p>
                    </div>

                  </div>
                );
              })
            ) : (
              <p className="text-center text-gray-700">
                No notices available
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