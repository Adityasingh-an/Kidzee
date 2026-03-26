// src/components/Hero.jsx
// This file is the Hero section, which is the main visual component you see at the top of the homepage.
// It includes a large heading, a decorative background grid, floating features, and an image of a child.

// Import necessary icons from the 'lucide-react' library for use in the feature cards below
import { Brain, GraduationCap, ShieldCheck, Users, Replace, Sparkles, Star, Rocket, BookOpen, Clock, Gamepad2 } from 'lucide-react';

export default function Hero() {
  // This array defines the five feature cards displayed at the bottom of the hero section.
  // We use objects to define the icon, main title, and subtitle for each feature.
  const features = [
    { icon: <Brain size={26} className="text-primary" />, title: "Holistic", subtitle: "Learning" },
    { icon: <GraduationCap size={26} className="text-primary" />, title: "Expert", subtitle: "Educators" },
    { icon: <ShieldCheck size={26} className="text-primary" />, title: "Safe and", subtitle: "Secure" },
    { icon: <Users size={26} className="text-primary" />, title: "Parental", subtitle: "Involvement" },
    { icon: <Replace size={26} className="text-primary" />, title: "Smooth", subtitle: "Transition" }
  ];

  return (
    // The main container for the Hero section. It uses flexbox, a light background color, and takes up most of the screen height.
    <section className="relative w-full flex flex-col bg-bg-light overflow-hidden pt-20 pb-10 lg:pt-24 lg:pb-12 min-h-[90vh]">
      
      {/* 
        ========================================
        1. BACKGROUND GRID PATTERN
        ======================================== 
        This div creates the subtle grid background behind the main content.
        We increased the opacity and used Kidzee blue and yellow colors to make the grid more visible and match the theme.
      */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #0055A5 1px, transparent 1px),
            linear-gradient(to bottom, #FFC107 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px' 
        }}
        aria-hidden="true"
      ></div>
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/30 pointer-events-none"></div>

      
      {/* 
        ========================================
        2. BACKGROUND DECORATIVE SHAPES
        ======================================== 
        These are the abstract and floating colorful shapes placed around the screen edges for a playful look.
      */}
      {/* Top right floating circle with a star */}
      <div className="absolute top-1/4 right-10 md:right-20 w-16 h-16 bg-primary rounded-full shadow-lg flex items-center justify-center opacity-90 z-0 ">
         <Star size={32} className="text-secondary fill-secondary" />
      </div>
      
      {/* Middle left large yellow circle with sparkles that rotates when hovered */}
      <div className="absolute top-1/2 left-[5%] md:left-[10%] w-20 h-20 bg-secondary rounded-full shadow-xl flex items-center justify-center z-30 opacity-90 rotate-12 transform hover:rotate-180 transition-transform duration-700">
         <Sparkles size={40} className="text-primary" />
      </div>
      
      {/* Hollow yellow circle in the top-left area */}
      <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full border-8 border-secondary opacity-30 z-0"></div>
      
      {/* A tilted yellow shape in the bottom-right corner */}
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-tr-3xl rounded-bl-3xl bg-secondary opacity-40 z-0 rotate-45"></div>
      
      {/* A semi-circle blue shape near the bottom center */}
      <div className="absolute bottom-10 left-1/3 w-32 h-16 rounded-t-full bg-primary opacity-30 z-0"></div>

      {/* 
        ========================================
        3. MAIN CONTENT CONTAINER
        ======================================== 
        This div centers the main content (Image on the left, Text on the right) and gives it a max width.
      */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-24 gap-12 lg:gap-24 xl:gap-32 w-full flex-grow max-w-[2000px] mx-auto">
        
        {/* 
          --------------------------------------
          A. LEFT SECTION: HERO IMAGE & PROPS
          -------------------------------------- 
          This container holds the main circular image and the floating icons around it.
        */}
        <div className="w-64 h-64 md:w-[26rem] md:h-[26rem] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] rounded-full border-[14px] md:border-[16px] border-white shadow-2xl relative flex justify-center items-center bg-gray-100 z-20 shrink-0 mx-auto lg:mx-0">
           
           {/* A spinning dashed border around the image */}
           <div className="absolute -inset-8 border-[3px] border-dashed border-primary/40 rounded-full animate-[spin_20s_linear_infinite]"></div>
           
           {/* The main child image, updated to show a child in a yellow dress */}
           <img 
             src="/assets/singlechild.png" 
             alt="Happy Student Learning" 
             className="w-full h-full object-cover rounded-full"
           />
           
           {/* The "100% Joyful" badge overlapping the bottom-right of the image */}
           <div className="absolute -bottom-6 -right-6 md:bottom-2 md:right-0 xl:bottom-6 xl:right-4 bg-secondary text-primary font-black p-4 md:p-6 rounded-full shadow-xl border-4 border-white rotate-12 transform hover:rotate-0 transition-transform hover:scale-110 z-30">
              <span className="block text-2xl md:text-3xl text-center leading-none">100%</span>
              <span className="block text-xs md:text-sm text-center uppercase mt-1">Joyful</span>
           </div>

           {/* 
             Floating Icons around the image matching the playful theme 
             They use animations like 'bounce' and 'pulse' to make the section feel alive.
           */}
           {/* Top left floating rocket */}
           <div className="absolute -top-6 -left-6 md:-top-10 md:-left-6 bg-white p-3 rounded-2xl shadow-lg border-2 border-primary rotate-[-15deg] animate-bounce z-10" style={{ animationDelay: '0ms' }}>
             <Rocket size={32} className="text-primary fill-primary/20" />
           </div>
           
           {/* Top right pulsing book */}
           <div className="absolute top-12 -right-12 xl:-right-16 bg-white p-3 rounded-full shadow-lg border-2 border-secondary rotate-[10deg] animate-pulse z-10">
             <BookOpen size={28} className="text-secondary" />
           </div>

           {/* Bottom left hovering clock */}
           <div className="absolute bottom-1/4 -left-12 xl:-left-16 bg-white p-3 rounded-full shadow-lg border-2 border-primary rotate-[-5deg] hover:scale-110 transition-transform z-10">
             <Clock size={30} className="text-primary" />
           </div>

           {/* Bottom left bouncing gamepad */}
           <div className="absolute -bottom-10 left-12 xl:left-24 bg-white p-3 rounded-xl shadow-lg border-2 border-secondary rotate-[20deg] animate-bounce z-10" style={{ animationDelay: '300ms' }}>
             <Gamepad2 size={28} className="text-secondary" />
           </div>
        </div>

        {/* 
          --------------------------------------
          B. RIGHT SECTION: TEXT & CALL TO ACTION
          -------------------------------------- 
          This container holds the main heading, subtitles, and the row of feature cards.
        */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10 w-full lg:flex-1">
          
          {/* Small pulsing button pointing to admissions */}
          <a 
            href="#admission" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-100 text-primary font-bold text-sm mb-4 border border-blue-200 shadow-sm hover:bg-blue-200 hover:shadow-md transition-all transform hover:-translate-y-1 group cursor-pointer lg:mt-0 mt-4 xl:mt-8"
          >
            {/* Pulsing dot indicator */}
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
            Admissions Open For 2026-27
            <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-1 -translate-x-2 group-hover:translate-x-0 font-bold">→</span>
          </a>

          {/* Main Title / Headline of the page */}
          <h1 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.8rem] leading-[1.1] font-heading font-black text-primary mb-4 lg:mb-6 tracking-tight drop-shadow-sm w-full">
            Build A Foundation <br className="hidden md:block" />
            For A Lifetime Of <br className="hidden md:block" />
            <span className="text-secondary relative whitespace-nowrap">
              Learning
              {/* Decorative underline beneath the word "Learning" */}
              <svg className="absolute w-full h-3 md:h-4 -bottom-1 left-0 text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>
          
          {/* A list of classes offered, styled as little floating chips */}
          <div className="text-primary/80 font-semibold text-base md:text-lg mb-6 lg:mb-8 leading-relaxed w-full">
             <div className="flex flex-wrap justify-center lg:justify-start gap-y-2 gap-x-3">
               <span className="bg-white/80 px-4 py-1.5 rounded-lg shadow-sm border border-blue-100 hover:border-primary transition-colors cursor-default whitespace-nowrap">Playgroup</span>
               <span className="bg-white/80 px-4 py-1.5 rounded-lg shadow-sm border border-blue-100 hover:border-primary transition-colors cursor-default whitespace-nowrap">Nursery</span>
               <span className="bg-white/80 px-4 py-1.5 rounded-lg shadow-sm border border-blue-100 hover:border-primary transition-colors cursor-default whitespace-nowrap">Jr. K.G.</span>
               <span className="bg-white/80 px-4 py-1.5 rounded-lg shadow-sm border border-blue-100 hover:border-primary transition-colors cursor-default whitespace-nowrap">Sr. K.G.</span>
               <span className="bg-white/80 px-4 py-1.5 rounded-lg shadow-sm border border-blue-100 hover:border-primary transition-colors cursor-default whitespace-nowrap">Grade 1&2</span>
               <span className="bg-white/80 px-4 py-1.5 rounded-lg shadow-sm border border-blue-100 hover:border-primary transition-colors cursor-default whitespace-nowrap"></span>
             </div>
          </div>

          {/* 
            Feature Cards Row
            This iterates over the 'features' array defined at the top of the file
            and displays a styled card for each one.
          */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 xl:gap-5 w-full">
             {features.map((feature, idx) => (
               <div 
                 key={idx} 
                 className="bg-white rounded-[20px] p-2 flex flex-col items-center justify-center w-[85px] sm:w-[95px] md:w-[110px] xl:w-[125px] h-[100px] md:h-[115px] xl:h-[135px] shadow-sm hover:shadow-lg border-b-4 border-secondary hover:-translate-y-2 transition-all relative z-20 group shrink-0"
               >
                 {/* Circle containing the feature icon */}
                 <div className="mb-1 md:mb-2 mt-1 bg-blue-50 p-2 md:p-3 rounded-full group-hover:scale-110 transition-transform">
                   {feature.icon}
                 </div>
                 {/* Feature titles */}
                 <span className="text-[9px] md:text-[11px] xl:text-xs font-bold text-primary text-center leading-tight">
                   {feature.title} <br/> {feature.subtitle}
                 </span>
               </div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
}
