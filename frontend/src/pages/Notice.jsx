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

  // 🔥 Time Ago Function
  const timeAgo = (date) => {
    const seconds = Math.floor((new Date() - new Date(date)) / 1000);

    const intervals = {
      year: 31536000,
      month: 2592000,
      day: 86400,
      hour: 3600,
      minute: 60
    };

    for (let key in intervals) {
      const value = Math.floor(seconds / intervals[key]);
      if (value >= 1) {
        return `${value} ${key}${value > 1 ? "s" : ""} ago`;
      }
    }

    return "Just now";
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: "linear-gradient(135deg, #f5f3ff, #ede9fe)"
      }}
    >
      <Header />

      <div className="flex-grow pt-[100px] px-4 md:px-10 flex justify-center">
        
        <div className="w-full max-w-4xl bg-white/80 backdrop-blur-xl border border-purple-200 rounded-3xl shadow-[0_20px_60px_rgba(124,58,237,0.2)] p-8">

          {/* TITLE */}
          <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-10 tracking-wide">
            📢 Notice Board
          </h1>

          <div className="space-y-6">
            {notices.length > 0 ? (
              notices.map((note, index) => {

                const isLatest = index === 0;

                const isNew =
                  new Date() - new Date(note.createdAt) <
                  24 * 60 * 60 * 1000;

                return (
                  <div
                    key={note._id}
                    className="rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl"
                  >

                    {/* HEADER */}
                    <div
                      onClick={() => toggleNotice(index)}
                      className={`cursor-pointer px-6 py-5 flex justify-between items-center transition-all duration-300
                      ${
                        activeIndex === index
                          ? "bg-gradient-to-r from-purple-700 to-indigo-600 text-white"
                          : "bg-white text-gray-800 hover:bg-purple-50"
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-wrap">

                        <span className="font-semibold text-lg">
                          {note.title || "No Title"}
                        </span>

                        {/* NEW Badge */}
                        {isNew && (
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                            NEW
                          </span>
                        )}

                      </div>

                      <span className="text-2xl font-bold">
                        {activeIndex === index ? "−" : "+"}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div
                      className={`px-6 overflow-hidden transition-all duration-500 ${
                        activeIndex === index
                          ? "max-h-60 py-4 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-700 leading-relaxed mb-3">
                        {note.message || note.description || "No Description"}
                      </p>

                      {/* TIME AGO */}
                      <div className="flex justify-between items-center text-sm text-gray-500">

                        <span>
                          ⏱ {timeAgo(note.createdAt)}
                        </span>

                        <span>
                          📅 {new Date(note.createdAt).toLocaleDateString("en-IN")}
                        </span>

                      </div>
                    </div>

                  </div>
                );
              })
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