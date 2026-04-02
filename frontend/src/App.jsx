import { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Contact from './components/Contact';
import About from './components/About';
import AdmissionForm from "./components/Admissionform";

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
function Home({ setShowForm }) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      <Header setShowForm={setShowForm} />
      
      <main className="flex-grow pt-[72px] md:pt-[88px] relative overflow-hidden bg-white">
        
        <section id="home">
          <Hero setShowForm={setShowForm} />
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

  return (
    <Router>

      {/* GLOBAL POPUP */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          
          <div className="relative animate-scaleIn">
            
            {/* CLOSE BUTTON (OUTSIDE) */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute -top-4 -right-4 bg-red-500 text-white w-8 h-8 rounded-full"
            >
              ✕
            </button>

            {/* 🔥 FIX HERE */}
            <AdmissionForm onClose={() => setShowForm(false)} />

          </div>
        </div>
      )}

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home setShowForm={setShowForm} />} />

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