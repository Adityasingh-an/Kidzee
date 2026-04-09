import Header from "../components/Header";
import Footer from "../components/Footer";
import Enquiry from "../components/Enquiry";
import { useState } from "react";
import { 
  School, 
  Palette, 
  Gamepad2, 
  Trees, 
  Camera, 
  Sparkles, 
  Bus, 
  HeartPulse 
} from "lucide-react";

const facilities = [
  {
    title: "Spacious Classrooms",
    description: "Bright, airy, and ergonomically designed learning spaces tailored for young minds.",
    icon: <School className="w-10 h-10 text-primary" />,
  },
  {
    title: "Activity Room",
    description: "A creative zone for arts, crafts, music, and interactive group learning activities.",
    icon: <Palette className="w-10 h-10 text-secondary" />,
  },
  {
    title: "Indoor Play Area",
    description: "Safe, soft-play environment perfect for developing motor skills and social interaction.",
    icon: <Gamepad2 className="w-10 h-10 text-accent" />,
  },
  {
    title: "Outdoor Play Zone",
    description: "Modern playground equipment with safety surfacing for healthy physical development.",
    icon: <Trees className="w-10 h-10 text-green-500" />,
  },
  {
    title: "CCTV Surveillance",
    description: "24/7 security monitoring across the campus for complete peace of mind for parents.",
    icon: <Camera className="w-10 h-10 text-gray-600" />,
  },
  {
    title: "Clean & Hygienic",
    description: "Rigorous daily sanitization protocols and kid-friendly washrooms maintained to high standards.",
    icon: <Sparkles className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: "Safe Transport",
    description: "GPS-enabled school vans with dedicated attendants to ensure safe pick-up and drop-off.",
    icon: <Bus className="w-10 h-10 text-primary" />,
  },
  {
    title: "Medical First-Aid",
    description: "Equipped medical room with trained staff for immediate care and regular health check-ups.",
    icon: <HeartPulse className="w-10 h-10 text-red-500" />,
  },
];

const Facilities = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col font-sans"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />

      <main className="flex-grow pt-[100px] pb-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Our World-Class Facilities 🏫
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto font-medium">
              We provide a nurturing environment equipped with modern amenities to ensure your child's holistic growth and safety.
            </p>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full"></div>
          </div>

          {/* Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div 
                key={index} 
                className="premium-card p-8 flex flex-col items-center text-center group bg-white/90 backdrop-blur-sm border-white"
              >
                <div className="p-4 rounded-2xl bg-lavender mb-6 group-hover:scale-110 transition-transform duration-300">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {facility.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 bg-primary/90 backdrop-blur-md rounded-[32px] p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
             {/* Decorative blob */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
             
             <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 relative z-10">
               Want to See Our Campus?
             </h2>
             <p className="text-lg mb-8 opacity-90 max-w-xl mx-auto relative z-10">
               Schedule a school tour today and experience our facilities first-hand.
             </p>
             <button 
               onClick={() => setShowEnquiry(true)}
               className="bg-secondary text-primary font-bold px-8 py-3 rounded-full hover:bg-white hover:text-primary transition-all uppercase tracking-wider relative z-10 shadow-lg"
             >
               Book a Tour
             </button>
          </div>
        </div>
      </main>

      {/* 🔥 ENQUIRY POPUP */}
      {showEnquiry && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          
          <div className="relative animate-scaleIn">

            <button
              onClick={() => setShowEnquiry(false)}
              className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full shadow-lg"
            >
              ✕
            </button>

            <Enquiry onClose={() => setShowEnquiry(false)} />

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Facilities;