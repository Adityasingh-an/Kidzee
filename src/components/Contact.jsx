import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const contactLinks = [
    { icon: '/assets/location.svg', title: 'Visit Us', details: '123 Education Lane, Learning City', href: 'https://maps.google.com/?q=123+Education+Lane+Learning+City' },
    { icon: '/assets/phone.svg', title: 'Call Us', details: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: '/assets/mail.svg', title: 'Email Us', details: 'info@kidzeeschool.com', href: 'mailto:info@kidzeeschool.com' },
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
            We're here to help! Reach out to us for any questions about admissions or our programs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24">
          {contactLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href}
              target={link.href.startsWith('http') ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="flex flex-col items-center group transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4 shadow-sm border-2 border-transparent group-hover:border-primary group-hover:bg-white group-hover:shadow-xl transition-all duration-300">
                <img src={link.icon} alt={link.title} className="w-8 h-8 md:w-10 md:h-10 opacity-80 group-hover:opacity-100" />
              </div>
              <h3 className="text-sm md:text-base font-black text-primary uppercase tracking-wider mb-1">
                {link.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 font-medium">
                {link.details}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
