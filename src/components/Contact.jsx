import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const contactLinks = [
    { icon: '/assets/location.svg', title: 'Visit Us', details: '697,Shastri Nagar,Akbarpur,Ambedkar Nagar,U.P(224122)', href: 'https://www.google.com/maps?q=Kidzee%20Akbarpur%20Shastri%20Nagar%20Colony%20Akbarpur%20Uttar%20Pradesh&output=embed' },
    { icon: '/assets/phone.svg', title: 'Call Us', details: '+91 6390181919 , 6391181919', href: 'tel:+91 6390181919 , 6391181919' },
    { icon: '/assets/mail.svg', title: 'Email Us', details: 'mailto:kidzeeakbarpur@gmail.com', href: 'kidzeeakbarpur@gmail.com' },
    { icon: '/assets/clock.svg', title: 'Hours', details: 'Mon - Fri: 8am - 4pm', href: '#' }
  ];

  return (
    <section id="contact-us" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-primary font-heading relative inline-block">
            Get In Touch
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </h2>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            Reach out to us for any questions about admissions or our programs.
          </p>
        </div>

        {/* MOBILE VIEW: Small Icons Only */}
        <div className="flex md:hidden flex-wrap justify-center items-center gap-6">
          {contactLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href}
              className="flex flex-col items-center group transition-all duration-300"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-2 shadow-sm border border-blue-100 group-hover:bg-white group-hover:shadow-lg transition-all">
                <img src={link.icon} alt={link.title} className="w-7 h-7 opacity-80" />
              </div>
              <span className="text-[10px] font-black text-primary uppercase tracking-tighter">
                {link.title}
              </span>
            </a>
          ))}
        </div>

        {/* LAPTOP/TABLET VIEW: Premium Cards */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {contactLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href}
              target={link.href.startsWith('http') ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="premium-card group bg-white p-8 rounded-[2rem] text-center shadow-md hover:shadow-2xl transition-all duration-500 border-b-4 border-transparent hover:border-primary flex flex-col items-center h-full"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:rotate-6 transition-all duration-300 shadow-inner">
                <img src={link.icon} alt={link.title} className="w-8 h-8 group-hover:invert group-hover:brightness-0 transition-all" />
              </div>
              <h3 className="text-xl font-black text-primary mb-3 group-hover:text-secondary transition-colors">
                {link.title}
              </h3>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                {link.details}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
