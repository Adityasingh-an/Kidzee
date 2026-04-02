import { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Contact from './components/Contact';
import About from './components/About';
import AdmissionForm from "./components/Admissionform";
import Enquiry from "./components/Enquiry"; // 🔥 ADD

// Pages
import Gallery from './pages/Gallery';
import Notice from './pages/Notice';
import Videos from './pages/Videos';
import Login from './pages/Login';
import Admin from "./pages/Admin";
import AdminVideo from "./pages/AdminVideo";
import Facilities from "./pages/Facilities";
import AboutPage from "./pages/AboutPage";
import ProgramsPage from "./pages/ProgramsPage";
import ContactPage from "./pages/ContactPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// 🏠 Home Page
function Home({ setShowForm, setShowEnquiry }) { // 🔥 ADD
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      
      <Header setShowForm={setShowForm} />

      <main className="flex-grow pt-[72px] md:pt-[88px] relative overflow-hidden bg-white">
        
        <section id="home">
          <Hero 
            setShowForm={setShowForm} 
            setShowEnquiry={setShowEnquiry} // 🔥 ADD
          />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="programmes">
          <Programs />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>

      <Footer />
    </div>
  );
}


// 🎯 Main App
function App() {
  const [showForm, setShowForm] = useState(false);
  const [showEnquiry, setShowEnquiry] = useState(false); // 🔥 ADD

  return (
    <Router>

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

      {/* 🔥 ADMISSION POPUP */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          
          <div className="relative animate-scaleIn">

            <button
              onClick={() => setShowForm(false)}
              className="absolute -top-3 -right-3 bg-red-500 hover:bg-red-600 text-white w-8 h-8 rounded-full shadow-lg"
            >
              ✕
            </button>

            <AdmissionForm onClose={() => setShowForm(false)} />

          </div>
        </div>
      )}

      <Routes>

        {/* Home */}
        <Route path="/" element={
          <Home 
            setShowForm={setShowForm} 
            setShowEnquiry={setShowEnquiry} // 🔥 ADD
          />
        } />

        {/* Pages */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/about" element={<AboutPage setShowForm={setShowForm} />} />
        <Route path="/programs" element={<ProgramsPage setShowForm={setShowForm} />} />
        <Route path="/contact" element={<ContactPage setShowForm={setShowForm} />} />

        {/* Admin */}
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/videos" element={<AdminVideo />} />

      </Routes>
    </Router>
  );
}

export default App;