import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  ArrowUp,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8 relative">
      {/* Back To Top Button */}
      <button
        onClick={scrollTop}
        className="fixed bottom-6 right-6 bg-secondary p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container mx-auto px-4 md:px-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Logo + About (Same as Header) */}
          <div>
            <a
              href="#home"
              className="flex items-center gap-2 group flex-shrink-0 mb-6"
            >
              <div className="h-16 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
                <img
                  src="/assets/logo.jpg"
                  alt="Kidzee Logo"
                  className="h-full w-auto object-contain"
                />
              </div>

              <span className="text-white font-black text-2xl tracking-tight">
                Kidzee Akbarpur
              </span>
            </a>

            <p className="text-sm text-bg-light/80 mb-6 leading-relaxed">
              Nurturing young minds with love and care at Kidzee Akbarpur.
              We provide a safe and creative learning environment.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a className="p-2 bg-white/10 rounded-lg hover:bg-secondary transition" href="https://www.facebook.com/share/1EBwuSkqLC/?mibextid=wwXIfr">
                <Facebook size={18} />
              </a>
              <a className="p-2 bg-white/10 rounded-lg hover:bg-secondary transition" href="https://www.instagram.com/kidzee.akbarpur?igsh=MXNqYXgyYmNxMGFuYg%3D%3D&utm_source=qr">
                <Instagram size={18} />
              </a>
              <a className="p-2 bg-white/10 rounded-lg hover:bg-secondary transition" href="https://x.com/kidzeeakbarpur?s=11">
                <Twitter size={18} />
              </a>
              <a className="p-2 bg-white/10 rounded-lg hover:bg-secondary transition" href="https://www.youtube.com/@KidzeeAkbarpur">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-secondary">
              Important Links
            </h3>

            <ul className="flex flex-col gap-3">
              {[
                { name: "Admissions 2026-27", path: "#admission" },
                { name: "Latest Notice Board", path: "#notice" },
                { name: "School Gallery", path: "#gallery" },
                { name: "Parent Portal", path: "#parent" },
                { name: "Careers at Kidzee", path: "#careers" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-sm text-bg-light/80 hover:text-secondary transition hover:translate-x-1 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-secondary">
              Programmes
            </h3>

            <ul className="flex flex-col gap-3">
              {["PlayGroup", "Nursery", "Kindergarten",].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-bg-light/80 hover:text-secondary transition hover:translate-x-1 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-secondary rounded-full"></span>
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-secondary">
              Contact Us
            </h3>

            <div className="flex flex-col gap-4 text-sm text-bg-light/80">
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <span>+91 6390181919</span>
                 <span>+91 6391181919</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} />
                <span>kidzeeakbarpur@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={16} />
                <span>697, Shastri Nagar, Akbarpur,
                Ambedkar Nagar, Uttar Pradesh
                224122</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-secondary">
              Our Location
            </h3>

            <div className="rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Kidzee%20Akbarpur%20Shastri%20Nagar%20Colony%20Akbarpur%20Uttar%20Pradesh&output=embed"
                className="w-full h-32 border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-6 flex flex-col items-center text-center gap-3 text-sm text-bg-light/60">
          <p>
            © {new Date().getFullYear()} Kidzee Akbarpur. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a className="hover:text-secondary transition">Privacy Policy</a>
            <a className="hover:text-secondary transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}