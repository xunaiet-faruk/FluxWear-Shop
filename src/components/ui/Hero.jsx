import  { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { 
  FaArrowRight, 
  FaEye, 
  FaCheckCircle, 
  FaTshirt,
  FaStar,
  FaUsers,
  FaSearchPlus
} from 'react-icons/fa';
import Typed from 'typed.js';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedElement, setTypedElement] = useState(null);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&h=800&fit=crop",
      title: "Premium Panjabi Collection",
      subtitle: "Timeless elegance for every occasion"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=800&fit=crop",
      title: "Modern Fashion Essentials",
      subtitle: "Where comfort meets style"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&h=800&fit=crop",
      title: "New Arrivals 2026",
      subtitle: "Be the first to wear the latest"
    }
  ];
  useEffect(() => {
    const options = {
      strings: ['Elegance', 'Comfort', 'Style', 'Class', 'Perfection'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      className: 'typed-cursor',
      smartBackspace: true,
    };

    const typed = new Typed('#typed-text', options);
    setTypedElement(typed);

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative  flex items-center overflow-hidden ">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-600/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-amber-600/20 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
         
          <div className="space-y-6">
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in-up">
              Elevate Your
              <span className="block text-amber-600 mt-2">
                <span id="typed-text"></span>
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white/70 max-w-lg leading-relaxed animate-fade-in-up animation-delay-200">
              Discover premium fashion that blends timeless elegance with modern comfort. 
              From classic Panjabis to contemporary essentials.
            </p>

            <div className="grid grid-cols-2 gap-4 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-2 text-amber-600">
                <FaCheckCircle className="text-amber-600" />
                <span className="text-white/80 text-sm">Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 text-amber-600">
                <FaCheckCircle className="text-amber-600" />
                <span className="text-white/80 text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-amber-600">
                <FaCheckCircle className="text-amber-600" />
                <span className="text-white/80 text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-amber-600">
                <FaCheckCircle className="text-amber-600" />
                <span className="text-white/80 text-sm">24/7 Support</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in-up animation-delay-600">
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-600/30 hover:scale-105 transform"
              >
                <span>Shop Now</span>
                <FaArrowRight className="text-sm" />
              </Link>
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 transform"
              >
                <FaEye />
                <span>View Collection</span>
              </Link>
            </div>

            <div className="flex gap-8 pt-4 border-t border-white/10 animate-fade-in-up animation-delay-800">
              <div className="flex items-center gap-3">
                <FaTshirt className="text-amber-600 text-xl" />
                <div>
                  <p className="text-2xl font-bold text-white">500+</p>
                  <p className="text-sm text-white/60">Products</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaStar className="text-amber-600 text-xl" />
                <div>
                  <p className="text-2xl font-bold text-white">4.9</p>
                  <p className="text-sm text-white/60">Rating</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaUsers className="text-amber-600 text-xl" />
                <div>
                  <p className="text-2xl font-bold text-white">50K+</p>
                  <p className="text-sm text-white/60">Customers</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-fade-in-up animation-delay-300">
            <div className="relative w-full max-w-md lg:max-w-lg group">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-amber-500/10 to-amber-700/10 shadow-2xl shadow-amber-600/10 group-hover:shadow-amber-600/30 transition-shadow duration-500">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-95'
                    }`}
                  >
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-amber-600 text-white p-4 rounded-full shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                        <FaSearchPlus className="text-2xl" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                      <h3 className="text-white font-semibold text-lg group-hover:translate-y-0 translate-y-0 transition-all duration-500">
                        {slide.title}
                      </h3>
                      <p className="text-white/70 text-sm">{slide.subtitle}</p>
                    </div>
                  </div>
                ))}

              
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                 
                  <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-amber-600 rounded-tl-2xl"></div>          
                  <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-amber-600 rounded-tr-2xl"></div>
                  <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-amber-600 rounded-bl-2xl"></div>
                  <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-amber-600 rounded-br-2xl"></div>
                </div>

           
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`transition-all duration-300 ${
                        index === currentSlide 
                          ? 'w-8 h-1.5 bg-amber-600' 
                          : 'w-4 h-1.5 bg-white/30 hover:bg-white/50'
                      } rounded-full`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

   
    </section>
  );
};

export default Hero;