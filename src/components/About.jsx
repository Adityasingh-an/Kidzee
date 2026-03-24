import React from 'react';
import { Ruler, Pencil, BookOpen, Star, Heart, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-lavender relative overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-no-repeat pointer-events-none" 
        style={{ backgroundImage: "url('/src/assets/Aboutbg.jpg')" }}
      ></div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-10 left-10 text-primary/20 -rotate-12 animate-pulse">
        <Ruler size={60} />
      </div>
      <div className="absolute bottom-10 right-10 text-secondary/20 rotate-12 animate-bounce">
        <Pencil size={50} />
      </div>
      
      <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Image with Blob Background */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Large white blob behind the image */}
              <div className="absolute inset-0 bg-white opacity-80 blob-shape transform -rotate-6 shadow-2xl"></div>
              
              {/* Image Container */}
              <div className="absolute inset-4 overflow-hidden blob-shape border-8 border-white shadow-inner">
                <img 
                  src="/src/assets/hero.png" 
                  alt="Kidzee Student" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Smaller floating decoration */}
              <div className="absolute -bottom-4 -left-4 bg-secondary p-4 rounded-3xl shadow-lg border-4 border-white rotate-12">
                 <Star className="text-primary fill-primary" size={32} />
              </div>
            </div>
          </div>
          
          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-6 inline-flex items-center gap-2">
              <h2 className="text-4xl md:text-5xl font-black text-primary font-heading relative">
                About Us
                <svg className="absolute -bottom-2 left-0 w-3/4 h-2 text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </h2>
            </div>
            
            <div className="space-y-8 mt-10">
              {/* Kidzee Pre-school */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-3">
                  <Heart className="text-secondary fill-secondary" size={24} />
                  Kidzee Pre-school
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Kidzee Pre-school is a leading chain of Pre-schools located in India and Nepal backed by Zee Learn Limited. With more than two decades of experience in the Pre-school industry, Kidzee has nurtured more than <span className="font-bold text-primary">1.5m+ children</span> throughout India. Being one of the largest Pre-schools in India, Kidzee has 2,500+ centres in 600+ cities in India and Nepal.
                </p>
              </div>

              {/* Kidzee Advantage */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-3">
                  <CheckCircle2 className="text-secondary" size={24} />
                  Kidzee Advantage
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Kidzee is a <strong className="text-primary">leader</strong> and a trendsetter in <strong className="text-primary">Early Childhood Care and Education (ECCE)</strong>. Our business partners' passion and drive are vital for our brand's success.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                  Our Business Partners don't just take the name, they also take our <span className="font-bold border-b-2 border-secondary">pedagogy-PÉNTEMIND</span>, guidelines to teach, prescribes books/plays to be followed and so on to the ground.
                </p>
              </div>

              {/* Secret to Success */}
              <div className="bg-white/50 p-6 rounded-3xl border-l-8 border-secondary shadow-sm">
                <p className="text-gray-700 font-medium italic">
                  Secret to Success is Service and Support. We provide pre-opening and operational support apart from the regular support that is given additional to all systems and workflows.
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
