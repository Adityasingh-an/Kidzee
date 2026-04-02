import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';

const AboutPage = ({ setShowForm }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header setShowForm={setShowForm} />
      <main className="flex-grow pt-[80px] md:pt-[100px]">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
