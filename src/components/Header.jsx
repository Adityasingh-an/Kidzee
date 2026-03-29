import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About Us', path: '#about' },
    { name: 'Programmes', path: '#programmes' },
    { name: 'Notice', path: '#notice' },
    { name: 'Gallery', path: '#gallery' },
    { name: 'Video', path: '#video' },
    { name: 'Facilities', path: '#facilities' },
    { name: 'Social Wall', path: '#social' },
    { name: 'FAQs', path: '#faqs' },
    { name: 'Blog', path: '#blog' },
    { name: 'Testimonial', path: '#testimonial' },
    { name: 'Contact Us', path: '#contact' }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 shadow-lg ${isScrolled ? 'bg-primary py-1' : 'bg-primary py-2'}`}>
      <div className="w-full px-4 md:px-12 lg:px-20 flex justify-between items-center h-full">
        {/* Logo Area */}
        <a href="#home" className="flex items-center gap-2 group flex-shrink-0">
          <div className="h-16 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 border-0 p-0 m-0">
             <img src="/assets/logo.jpg" alt="Kidzee Logo" className="h-full w-auto object-contain border-0 p-0 m-0 shadow-none outline-none" />
          </div>
        </a>

        {/* Desktop Nav - Responsive visibility */}
        <nav className="hidden min-[748px]:flex min-[748px]:gap-x-3 min-[1048px]:gap-x-4 min-[1224px]:gap-x-5 min-[1440px]:gap-x-6 items-center flex-wrap justify-end flex-grow ml-2 mr-4 min-[1048px]:ml-4 min-[1048px]:mr-6">
          {navLinks.map((link) => {
             let visibilityClass = "";
             if (['Home', 'About Us', 'Notice'].includes(link.name)) {
               visibilityClass = "min-[748px]:block";
             } else if (['Programmes', 'FAQs'].includes(link.name)) {
               visibilityClass = "hidden min-[1048px]:block";
             } else if (['Gallery', 'Facilities', 'Contact Us'].includes(link.name)) {
               visibilityClass = "hidden min-[1224px]:block";
             } else {
               visibilityClass = "hidden min-[1412px]:block";
             }

             return (
               <a 
                  key={link.name} 
                  href={link.path} 
                  className={`font-heading font-bold transition-all text-[12px] min-[1048px]:text-[13px] min-[1440px]:text-[14px] uppercase tracking-tight relative group whitespace-nowrap text-white hover:text-secondary hover:scale-105 ${visibilityClass}`}
               >
                 {link.name}
                 <span className={`absolute -bottom-1 left-0 h-[3px] bg-secondary transition-all w-0 group-hover:w-full rounded-full`}></span>
               </a>
             )
          })}
        </nav>

        {/* Enroll Now Button - Visible on md+ including large screens */}
        <a href="#admission" className="hidden md:inline-flex items-center justify-center bg-secondary text-primary font-bold px-6 py-2 rounded-full hover:bg-purple-900 hover:text-white transition-all uppercase text-sm tracking-wider shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ml-auto xl:ml-0 mr-4 xl:mr-0 z-10 group/enroll">
          Enroll Now
          <ArrowRight className="ml-2 w-0 h-5 opacity-0 group-hover/enroll:w-5 group-hover/enroll:opacity-100 transition-all duration-300 ease-out" />
        </a>

        {/* Mobile Menu Button */}
        <button className="min-[1223px]:hidden text-white hover:text-secondary transition-colors sm:ml-0 ml-auto" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
           {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`min-[1224px]:hidden absolute top-full left-0 w-full bg-primary shadow-2xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[80vh] py-2 border-t border-white/10 overflow-y-auto' : 'max-h-0 py-0'}`}>
         <div className="container mx-auto px-4 flex flex-col">
            {navLinks.map((link) => (
               <a 
                 key={link.name} 
                 href={link.path} 
                 className="text-white hover:text-secondary font-medium transition-colors border-b border-white/5 py-3 pl-2 text-sm uppercase" 
                 onClick={() => setIsMobileMenuOpen(false)}
               >
                 {link.name}
               </a>
            ))}
         </div>
      </div>
    </header>
  );
}
