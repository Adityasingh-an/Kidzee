import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const ContactPage = ({ setShowForm }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header setShowForm={setShowForm} />
      <main className="flex-grow pt-[80px] md:pt-[100px]">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
