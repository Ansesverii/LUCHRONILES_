import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-8">
            Get in touch with us for any inquiries or collaborations
          </p>
          
          <div className="space-y-6">
            {/* Email */}
            <div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">Email</h3>
              <a 
                href="mailto:Theluchronicles@gmail.com" 
                className="text-luChronicles-black hover:text-luChronicles-darkGray transition-colors text-lg"
              >
                Theluchronicles@gmail.com
              </a>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex justify-center">
                <a 
                  href="https://www.instagram.com/the.lu.chronicles?igsh=d3dxYjJ1bzY1ZWZi&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-luChronicles-black text-white hover:bg-luChronicles-darkGray transition-colors transform hover:scale-105"
                >
                  <span className="sr-only">Instagram</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
