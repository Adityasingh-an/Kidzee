import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    { icon: MapPin, title: 'Our Location', details: '123 Education Lane,\nLearning City, 456789' },
    { icon: Phone, title: 'Phone Number', details: '+123 456 7890 \n+098 765 4321' },
    { icon: Mail, title: 'Email Address', details: 'info@kidzeeclone.com \nadmissions@kidzeeclone.com' },
    { icon: Clock, title: 'Operating Time', details: 'Monday - Friday \n8:00 AM - 4:00 PM' }
  ];

  return (
    <section id="contact-us" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Playful Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--bs-primary) 1px, transparent 0)`,
          backgroundSize: '32px 32px' 
        }}
      ></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-tl-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
         <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 relative inline-block">
            Get In Touch
             <span className="absolute -bottom-3 left-1/4 w-1/2 h-1.5 bg-secondary rounded-full"></span>
          </h2>
          <p className="text-gray-600 mt-6 text-lg">
            We would love to hear from you. Visit us, call us or send us an email for any queries regarding admissions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-3xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-primary group">
                 <div className="w-20 h-20 bg-bg-light rounded-full flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                   <Icon size={32} strokeWidth={1.5} />
                 </div>
                 <h3 className="text-xl font-bold text-primary mb-3">{info.title}</h3>
                 <p className="text-gray-500 whitespace-pre-line text-sm leading-relaxed">{info.details}</p>
              </div>
            );
          })}
        </div>

        {/* Map Box */}
        <div className="w-full h-[450px] bg-gray-200 rounded-[2.5rem] overflow-hidden shadow-2xl relative border-8 border-white group">
           <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.112284168285!2d77.2090212!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd4a0a56e9c9%3A0x6bba59c0fb127bcf!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin" 
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
           </iframe>
           <div className="absolute inset-0 pointer-events-none group-hover:opacity-0 transition-opacity duration-700 flex items-center justify-center bg-black/5">
             {/* Optional overlay before hover */}
           </div>
        </div>
      </div>
    </section>
  );
}
