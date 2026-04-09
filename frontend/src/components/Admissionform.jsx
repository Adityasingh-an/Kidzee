import { useState } from "react";
import emailjs from "@emailjs/browser";

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

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Valid email required";
    if (!form.mobile.match(/^[0-9]{10}$/))
      newErrors.mobile = "Valid 10 digit number required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    const templateParams = {
      name: (form.firstName || "") + " " + (form.lastName || ""),
      firstName: form.firstName || "N/A",
      lastName: form.lastName || "N/A",
      email: form.email || "N/A",
      mobile: form.mobile || "N/A",
      pincode: form.pincode || "N/A",
      country: form.country || "N/A",
      state: form.state || "N/A",
      city: form.city || "N/A",
      location: form.location || "N/A"
    };

    emailjs
      .send(
        "service_km4odue",
        "template_6mgzyhv",
        templateParams,
        "yPbwbGe8S1oThjNHg"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);

        setForm({
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

        setTimeout(() => {
          setSuccess(false);
          onClose && onClose();
        }, 2000);
      })
      .catch(() => {
        setLoading(false);
        alert("Email send failed ❌");
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-3">

      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl overflow-hidden shadow-2xl">

        <div className="bg-gradient-to-r from-yellow-300 to-yellow-200 px-6 py-4">
          <h2 className="text-2xl font-bold text-black tracking-wide">
            Enquire Now
          </h2>
        </div>

        <div className="bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 p-6 sm:p-8">

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-md"
          >
            ✕
          </button>

          {success && (
            <div className="mb-4 text-center text-green-800 font-semibold">
              ✅ Form Submitted Successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 pb-6">

            <div>
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="First Name*"
                className="w-full px-5 py-3 rounded-full bg-white/90 focus:ring-2 focus:ring-purple-600 outline-none shadow-sm"
              />
              {errors.firstName && (
                <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name*"
              className="w-full px-5 py-3 rounded-full bg-white/90 focus:ring-2 focus:ring-purple-600 outline-none shadow-sm"
            />

            <div>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email*"
                className="w-full px-5 py-3 rounded-full bg-white/90 focus:ring-2 focus:ring-purple-600 outline-none shadow-sm"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  placeholder="Mobile*"
                  className="w-full px-5 py-3 rounded-full bg-white/90 focus:ring-2 focus:ring-purple-600 outline-none shadow-sm"
                />
                {errors.mobile && (
                  <p className="text-red-600 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>

              <input
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                placeholder="Pin Code*"
                className="w-full px-5 py-3 rounded-full bg-white/90 focus:ring-2 focus:ring-purple-600 outline-none shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="country"
                value={form.country}
                onChange={handleChange}
                placeholder="Country*"
                className="w-full px-5 py-3 rounded-full bg-white/90 focus:ring-2 focus:ring-purple-600 outline-none shadow-sm"
              />

              <input
                name="state"
                value={form.state}
                onChange={handleChange}
                placeholder="State/District*"
                className="w-full px-5 py-3 rounded-full bg-white/90 focus:ring-2 focus:ring-purple-600 outline-none shadow-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City*"
                className="w-full px-5 py-3 rounded-full bg-white/90 focus:ring-2 focus:ring-purple-600 outline-none shadow-sm"
              />

              <input
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Location*"
                className="w-full px-5 py-3 rounded-full bg-white/90 focus:ring-2 focus:ring-purple-600 outline-none shadow-sm"
              />
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-purple-700 to-purple-500 hover:scale-105 active:scale-95 text-white px-12 py-3 rounded-full font-semibold shadow-lg transition-all duration-200"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}