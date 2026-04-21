import { useState } from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Contact from './components/Contact';
import About from './components/About';
import AdmissionForm from "./components/Admissionform";
import Enquiry from "./components/Enquiry";

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



function Home({ setShowForm, setShowEnquiry }) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      
      <Header setShowForm={setShowForm} />

      <main className="flex-grow pt-[72px] md:pt-[88px] relative overflow-hidden bg-white">
        
        {/* Hero */}
        <section id="home">
          <Hero 
            setShowForm={setShowForm} 
            setShowEnquiry={setShowEnquiry}
          />
        </section>
        {/* Hero */}
<section id="home">
  <Hero 
    setShowForm={setShowForm} 
    setShowEnquiry={setShowEnquiry}
  />
</section>

{/* 🔥 SEO Content START (SAFE ADDITION) */}
<section className="px-6 py-10 max-w-6xl mx-auto text-gray-700">
  
  <h2 className="text-3xl font-bold mb-4">
    Best Play School in Akbarpur – Kidzee Akbarpur
  </h2>

  <p className="mb-4">
    Kidzee Akbarpur is one of the best preschools in Akbarpur, dedicated to providing quality early childhood education in a safe and nurturing environment. We focus on the overall development of children through fun learning, creative activities, and interactive teaching methods.
  </p>

  <h3 className="text-2xl font-semibold mt-6 mb-2">
    Why Choose Kidzee Akbarpur?
  </h3>

  <p className="mb-4">
    At Kidzee Akbarpur, we believe every child is unique. Our experienced teachers ensure personalized attention, helping children grow academically, socially, and emotionally.
  </p>

  <ul className="list-disc pl-5 space-y-1">
    <li>Safe & secure environment</li>
    <li>Experienced and caring teachers</li>
    <li>Smart learning techniques</li>
    <li>Activity-based curriculum</li>
    <li>Focus on overall child development</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6 mb-2">
    Admission Open in Akbarpur
  </h3>

  <p>
    Admissions are now open at Kidzee Akbarpur. Give your child the best start with one of the top play schools in Akbarpur.
  </p>

</section>
{/* 🔥 SEO Content END */}

        {/* About */}
        <section id="about">
          <About />
        </section>

        {/* Programs 🔥 FIXED */}
        <section id="programmes">
          <Programs setShowEnquiry={setShowEnquiry} />
        </section>

        {/* Contact */}
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
  const [showEnquiry, setShowEnquiry] = useState(false);

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
        <Route 
          path="/" 
          element={
            <Home 
              setShowForm={setShowForm} 
              setShowEnquiry={setShowEnquiry} 
            />
          } 
        />

        {/* Pages */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/facilities" element={<Facilities />} />

        {/* 🔥 FIXED PROGRAMS PAGE */}
        <Route 
          path="/programs" 
          element={
            <ProgramsPage 
              setShowForm={setShowForm} 
              setShowEnquiry={setShowEnquiry} 
            />
          } 
        />

        <Route path="/about" element={<AboutPage setShowForm={setShowForm} />} />
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