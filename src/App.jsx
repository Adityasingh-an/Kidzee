import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      <Header />
      <main className="flex-grow pt-[72px] md:pt-[88px] relative overflow-hidden bg-white">
        <section id="home">
          <Hero />
        </section>
        {/* About section would go here, currently maybe missing or in Hero */}
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

export default App;
