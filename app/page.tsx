'use client';

import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 bg-amber-500 text-white text-center py-2 px-4 text-sm font-medium z-[1001]">
        ✨ This is a free redesign mockup created by Byldr — <a href="https://ryancwynar.github.io" className="underline">Learn More</a>
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 px-4 md:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl">🐾</span>
            <span className="text-lg md:text-xl font-bold text-teal-700">Java Pet Spa</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-teal-600 transition">Services</a>
            <a href="#why-us" className="text-gray-600 hover:text-teal-600 transition">Why Us</a>
            <a href="#reviews" className="text-gray-600 hover:text-teal-600 transition">Reviews</a>
            <a href="#contact" className="text-gray-600 hover:text-teal-600 transition">Contact</a>
          </div>
          
          <a href="tel:9545668874" className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition text-sm md:text-base whitespace-nowrap">
            📞 <span className="hidden sm:inline">(954) 566-8874</span><span className="sm:hidden">Call</span>
          </a>
          
          <button 
            className="md:hidden ml-2 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
            <a href="#services" className="block px-6 py-3 text-gray-600 hover:bg-teal-50">Services</a>
            <a href="#why-us" className="block px-6 py-3 text-gray-600 hover:bg-teal-50">Why Us</a>
            <a href="#reviews" className="block px-6 py-3 text-gray-600 hover:bg-teal-50">Reviews</a>
            <a href="#contact" className="block px-6 py-3 text-gray-600 hover:bg-teal-50">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-4 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            🏆 Award-Winning Pet Grooming in Fort Lauderdale
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Premium Grooming for Your<br className="hidden md:block" />
            <span className="text-teal-600">Furry Family Members</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Dogs & cats of all breeds welcome! Professional grooming, skin treatments, 
            and boarding services with love and care since 2008.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:9545668874" className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-700 transition shadow-lg shadow-teal-200">
              📞 Book Appointment
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-teal-600 hover:bg-teal-50 transition">
              View Services →
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 bg-white border-y">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl mb-2">⭐</div>
              <div className="font-bold text-gray-800">4.9/5 Rating</div>
              <div className="text-sm text-gray-500">Google Reviews</div>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🏆</div>
              <div className="font-bold text-gray-800">Best of 2024</div>
              <div className="text-sm text-gray-500">Fort Lauderdale</div>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🐕</div>
              <div className="font-bold text-gray-800">All Breeds</div>
              <div className="text-sm text-gray-500">Dogs & Cats</div>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">❤️</div>
              <div className="font-bold text-gray-800">15+ Years</div>
              <div className="text-sm text-gray-500">Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Grooming Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">From basic baths to full spa treatments, we pamper your pets with the best care.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🐕', title: 'Dog Grooming', desc: 'Full-service grooming including bath, haircut, nail trim, ear cleaning, and more. All breeds welcome!', price: 'From $45' },
              { icon: '🐱', title: 'Cat Grooming', desc: 'Gentle cat grooming services including bath, brush-out, nail trim, and lion cuts available.', price: 'From $55' },
              { icon: '✨', title: 'Skin Treatments', desc: 'Veterinarian-recommended skin treatments for allergies, dry skin, and coat health.', price: 'From $30' },
              { icon: '🛁', title: 'Bath & Brush', desc: 'Quick bath service with premium shampoo, blow dry, and brush out for fresh, clean pets.', price: 'From $25' },
              { icon: '🏠', title: 'Pet Boarding', desc: 'Safe and comfortable overnight stays while you travel. Includes playtime and feeding.', price: 'From $40/night' },
              { icon: '☀️', title: 'Doggy Daycare', desc: 'Supervised play and socialization for your pup while you work. Half or full day options.', price: 'From $25/day' },
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition group">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-teal-600 font-semibold">{service.price}</span>
                  <a href="tel:9545668874" className="text-teal-600 hover:text-teal-700 font-medium">Book Now →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16 md:py-20 px-4 bg-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Pet Parents Choose Us</h2>
              <p className="text-gray-600 mb-8">At Java Cat & Dog Spa, we treat every pet like our own. Our experienced groomers are passionate about animals and dedicated to providing stress-free grooming experiences.</p>
              
              <div className="space-y-4">
                {[
                  { title: 'Experienced Groomers', desc: 'Certified professionals with 15+ years of experience' },
                  { title: 'All Breeds Welcome', desc: 'From tiny Chihuahuas to large Great Danes, we groom them all' },
                  { title: 'Fear-Free Approach', desc: 'Gentle handling techniques to keep pets calm and comfortable' },
                  { title: 'Vet-Recommended', desc: 'Trusted by local veterinarians for quality care' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="text-6xl text-center mb-4">🐕‍🦺</div>
              <h3 className="text-2xl font-bold text-center mb-4">Book Your Pet's Spa Day</h3>
              <p className="text-gray-600 text-center mb-6">Call now to schedule an appointment. Same-day availability often available!</p>
              <a href="tel:9545668874" className="block w-full bg-teal-600 text-white text-center py-4 rounded-xl text-lg font-semibold hover:bg-teal-700 transition">
                📞 (954) 566-8874
              </a>
              <p className="text-sm text-gray-500 text-center mt-4">Open Mon-Sat 9AM-6PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Pet Parents Say</h2>
            <p className="text-gray-600">Join hundreds of happy pet families in Fort Lauderdale</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Sarah M.', pet: '🐩 Poodle Owner', text: "Best grooming experience ever! My dog actually enjoys going here. The staff is so gentle and caring. Highly recommend!" },
              { name: 'Mike R.', pet: '🐱 Cat Owner', text: "Finally found a groomer who knows how to handle cats! My Persian comes back looking like a show cat every time." },
              { name: 'Lisa K.', pet: '🐕 Golden Retriever', text: "We've been coming here for 5 years. The boarding service is fantastic - I never worry about my pup when I travel." },
            ].map((review, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.pet}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Location Section */}
      <section id="contact" className="py-16 md:py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Visit Our Spa</h2>
              <p className="text-gray-300 mb-8">Conveniently located in Fort Lauderdale's NE neighborhood. Easy parking available!</p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-300">3318 NE 33rd Street<br />Fort Lauderdale, FL 33308</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <a href="tel:9545668874" className="text-teal-400 hover:text-teal-300">(954) 566-8874</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🕐</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Hours</h3>
                    <p className="text-gray-300">Monday - Saturday: 9AM - 6PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-2xl p-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.5!2d-80.1016527!3d26.1689227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xac9806abb8f0d9d2!2sJava%20Cat%20%26%20Dog%20Spa!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%" 
                height="300" 
                style={{ border: 0, borderRadius: '12px' }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">Ready to Pamper Your Pet?</h2>
          <p className="text-teal-100 mb-8">Book an appointment today and give your furry friend the spa treatment they deserve!</p>
          <a href="tel:9545668874" className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
            📞 Call (954) 566-8874
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-400 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="flex items-center justify-center gap-2 mb-2">
            <span>🐾</span>
            <span className="font-bold text-white">Java Cat & Dog Spa</span>
          </p>
          <p className="text-sm">3318 NE 33rd Street, Fort Lauderdale, FL 33308</p>
          <p className="text-sm mt-4">© 2024 Java Cat & Dog Spa. All rights reserved.</p>
        </div>
      </footer>

      {/* Tracking pixel */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const params = new URLSearchParams(window.location.search);
            const ref = params.get('ref');
            if (ref) {
              const img = new Image();
              img.src = 'https://convex-actions.byldr.co/track?ref=' + encodeURIComponent(ref) + '&url=' + encodeURIComponent(window.location.href);
            }
          })();
        `
      }} />
    </div>
  );
}
