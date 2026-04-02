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
        
        <div className="w-full max-w-4xl bg-yellow-100 border-[10px] border-yellow-700 rounded-2xl shadow-2xl p-8 relative">

          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            📢 Notice Board
          </h1>

          <div className="space-y-4">
            {notices.length > 0 ? (
              notices.map((note, index) => (
                <div key={note._id} className="bg-white rounded-lg shadow overflow-hidden">

                  {/* TITLE */}
                  <div
                    onClick={() => toggleNotice(index)}
                    className="cursor-pointer p-4 flex justify-between items-center bg-purple-600 text-white"
                  >
                    <span>{note.title || "No Title"}</span>
                    <span>{activeIndex === index ? "−" : "+"}</span>
                  </div>

                  {/* DESCRIPTION */}
                  {activeIndex === index && (
                    <div className="p-4 bg-gray-50 text-black">
                      
                      <p>
                        {note.message || note.description || "No Description"}
                      </p>

                      {/* 🔥 DATE TIME ADDED */}
                      <p className="text-sm text-gray-500 mt-2">
                        📅 {new Date(note.createdAt).toLocaleString("en-IN", {
                          dateStyle: "medium",
                          timeStyle: "short"
                        })}
                      </p>

                    </div>
                  )}

                </div>
              ))
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