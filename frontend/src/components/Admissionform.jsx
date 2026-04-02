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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full max-w-lg bg-[#b8a5c9] rounded-3xl p-6 relative shadow-2xl">

      {/* ❌ CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="absolute -top-3 -right-3 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center"
      >
        ✕
      </button>

      {/* TITLE */}
      <h2 className="text-2xl font-bold mb-6 text-black text-center">
        Admission Form
      </h2>

      <div className="space-y-3">

        <input name="firstName" placeholder="First Name*" onChange={handleChange}
          className="w-full p-2.5 rounded-full bg-gray-200 outline-none" />

        <input name="lastName" placeholder="Last Name*" onChange={handleChange}
          className="w-full p-2.5 rounded-full bg-gray-200 outline-none" />

        <input name="email" placeholder="Email*" onChange={handleChange}
          className="w-full p-2.5 rounded-full bg-gray-200 outline-none" />

        {/* Row */}
        <div className="flex gap-3">
          <input name="mobile" placeholder="Mobile*" onChange={handleChange}
            className="w-1/2 p-2.5 rounded-full bg-gray-200 outline-none" />
          <input name="pincode" placeholder="Pin Code*" onChange={handleChange}
            className="w-1/2 p-2.5 rounded-full bg-gray-200 outline-none" />
        </div>

        <div className="flex gap-3">
          <input name="country" placeholder="Country*" onChange={handleChange}
            className="w-1/2 p-2.5 rounded-full bg-gray-200 outline-none" />
          <input name="state" placeholder="State*" onChange={handleChange}
            className="w-1/2 p-2.5 rounded-full bg-gray-200 outline-none" />
        </div>

        <div className="flex gap-3">
          <input name="city" placeholder="City*" onChange={handleChange}
            className="w-1/2 p-2.5 rounded-full bg-gray-200 outline-none" />
          <input name="location" placeholder="Location*" onChange={handleChange}
            className="w-1/2 p-2.5 rounded-full bg-gray-200 outline-none" />
        </div>

        {/* BUTTON */}
        <div className="text-center pt-4">
          <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-2.5 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}