import { useState } from "react";

export default function EnquiryForm({ onClose }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    pincode: "",
    country: "",
    state: "",
    city: "",
    location: ""
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 yaha tu API / emailJS call karega
    console.log(form);

    // SUCCESS SHOW
    setShowSuccess(true);

    // Auto close after 2 sec
    setTimeout(() => {
      setShowSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <>
      {/* 🔥 SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-2xl p-6 w-[300px] text-center shadow-2xl animate-[scaleIn_0.3s_ease]">
            
            <div className="text-green-500 text-4xl mb-2">✔</div>

            <h3 className="text-lg font-semibold text-gray-800">
              Submitted Successfully
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              We’ll contact you soon
            </p>
          </div>
        </div>
      )}

      {/* FORM */}
      <div className="w-full max-w-lg bg-[#b8a5c9] rounded-3xl p-7 relative shadow-[0_15px_40px_rgba(0,0,0,0.25)] border border-white/30">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-white w-9 h-9 rounded-full flex items-center justify-center shadow-md transition"
        >
          ✕
        </button>

        {/* TITLE */}
        <h2 className="text-2xl font-semibold mb-6 text-black text-center tracking-wide">
          Admission Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input name="firstName" placeholder="First Name*" onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition" />

          <input name="lastName" placeholder="Last Name*" onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition" />

          <input name="email" placeholder="Email*" onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition" />

          <div className="flex gap-3">
            <input name="mobile" placeholder="Mobile*" onChange={handleChange}
              className="w-1/2 px-4 py-2.5 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition" />
            <input name="pincode" placeholder="Pin Code*" onChange={handleChange}
              className="w-1/2 px-4 py-2.5 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition" />
          </div>

          <div className="flex gap-3">
            <input name="country" placeholder="Country*" onChange={handleChange}
              className="w-1/2 px-4 py-2.5 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition" />
            <input name="state" placeholder="State*" onChange={handleChange}
              className="w-1/2 px-4 py-2.5 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition" />
          </div>

          <div className="flex gap-3">
            <input name="city" placeholder="City*" onChange={handleChange}
              className="w-1/2 px-4 py-2.5 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition" />
            <input name="location" placeholder="Location*" onChange={handleChange}
              className="w-1/2 px-4 py-2.5 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition" />
          </div>

          <div className="text-center pt-5">
            <button type="submit"
              className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-10 py-2.5 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200">
              Submit
            </button>
          </div>

        </form>
      </div>
    </>
  );
}