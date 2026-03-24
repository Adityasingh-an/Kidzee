export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden p-1">
                <img src="/src/assets/kidzee logo.jpeg" alt="Kidzee Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-white font-black text-2xl tracking-tighter">Akbarpur</span>
            </div>
            <p className="text-bg-light/80 text-sm leading-relaxed mb-6">
              Nurturing young minds with love and care at Kidzee Akbarpur. We provide a safe, engaging, and creative environment for your child's early development.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-black mb-6 text-secondary uppercase tracking-wider relative inline-block font-heading">
              Important Links
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-secondary rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'Admissions 2026-27', path: '#admission' },
                { name: 'Latest Notice Board', path: '#notice' },
                { name: 'School Gallery', path: '#gallery' },
                { name: 'Parent Portal', path: '#parent' },
                { name: 'Careers at Kidzee', path: '#careers' }
              ].map(link => (
                <li key={link.name}>
                  <a href={link.path} className="text-bg-light/80 hover:text-secondary transition-all text-sm flex items-center gap-2 group">
                    <span className="w-2 h-2 rounded-full bg-secondary group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-secondary relative inline-block">
              Programmes
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-3">
              {['PlayGroup', 'Nursery', 'Kindergarten', 'Teacher Training'].map(link => (
                <li key={link}>
                  <a href="#" className="text-bg-light/80 hover:text-secondary transition-colors text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h3 className="text-lg font-bold mb-6 text-secondary relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary rounded-full"></span>
            </h3>
            <address className="not-italic flex flex-col gap-4 text-sm text-bg-light/80">
               <p className="font-medium text-white">Kidzee Preschool</p>
               <p>123 Education Lane, Learning City, 456789</p>
               <p><a href="tel:+1234567890" className="hover:text-secondary transition-colors">+123 456 7890</a></p>
               <p><a href="mailto:info@kidzeeclone.com" className="hover:text-secondary transition-colors">info@kidzeeclone.com</a></p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-bg-light/60">
           <p>&copy; {new Date().getFullYear()} Kidzee Clone. All rights reserved.</p>
           <div className="flex gap-4">
              <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
