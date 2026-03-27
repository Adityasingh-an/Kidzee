import React from 'react';
import { ArrowRight, Layout, Book, Music, Sun, Palette } from 'lucide-react';

const programs = [
  {
    title: 'PlayGroup',
    ageGroup: '2.5 - 3 Years',
    duration: '2.5 Hours/Day',
    desc: "Children are born curious. They begin to explore the environment around them as soon as they are born. Kidzee's playgroup curriculum plays an important role in helping children continue their...",
    color: 'bg-blue-100 text-blue-500',
    blobColor: '#0ea5e9',
    icon: <Palette size={32} />
  },
  {
    title: 'Nursery',
    ageGroup: '3.5 - 4 Years',
    duration: '2.5 Hours/Day',
    desc: "To set a firm foundation in the early years of preschool, quality early childhood education is vital for the overall development of a child. The Nursery syllabus has the right array of activities and...",
    color: 'bg-green-100 text-green-500',
    blobColor: '#22c55e',
    icon: <Sun size={32} />
  },
  {
    title: 'Kindergarten',
    ageGroup: '4 - 6 Years',
    duration: '3.5 Hours/Day',
    desc: "At Kidzee, the Kindergarten (KG) curriculum ensures a smooth transition to formal schooling. Children learn age-appropriate activities in various areas like English language, numbers, gener...",
    color: 'bg-yellow-100 text-yellow-600',
    blobColor: '#eab308',
    icon: <Book size={32} />
  }
];

export default function Programs() {
  return (
    <section id="programmes" className="py-20 bg-lavender/50 relative overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-30 bg-cover bg-center bg-no-repeat pointer-events-none" 
        style={{ backgroundImage: "url('/assets/programmbg.jpg')" }}
      ></div>

      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-primary font-heading relative inline-block">
            Programmes
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, idx) => (
            <div 
              key={idx} 
              className="premium-card group p-8 flex flex-col items-center text-center relative overflow-hidden h-full border-b-4 border-secondary hover:border-primary transition-all duration-300"
            >
              {/* Decorative Background Blob on Hover */}
              <div 
                className="absolute -top-10 -right-10 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full"
                style={{ backgroundColor: prog.blobColor }}
              ></div>

              {/* Icon Container */}
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${prog.color.split(' ')[0]} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner`}>
                <div className={`${prog.color.split(' ')[1]}`}>
                  {prog.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-black text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                {prog.title}
              </h3>
              
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                  {prog.ageGroup}
                </span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                  {prog.duration}
                </span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {prog.desc}
              </p>

              <button className="mt-auto w-full py-3 px-6 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 group-hover:bg-secondary group-hover:text-primary transition-all duration-300 shadow-md">
                Enquire Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

