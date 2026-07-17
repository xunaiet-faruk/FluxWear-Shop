import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaRulerCombined,
  FaCheckCircle,
  FaTshirt,
  FaStar,
  FaUsers,
  FaGem,
  FaShieldAlt,
} from 'react-icons/fa';
import Typed from 'typed.js';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&h=800&fit=crop",
      label: "Collection 001",
      title: "Premium Panjabi",
      subtitle: "Handcrafted Excellence"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&h=800&fit=crop",
      label: "Collection 002",
      title: "Modern Essentials",
      subtitle: "Where Comfort Meets Style"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&h=800&fit=crop",
      label: "Collection 003",
      title: "New Arrival '26",
      subtitle: "Be the First to Wear"
    }
  ];

  const features = [
    "Premium Quality",
    "Free Shipping",
    "Secure Payment",
    "24/7 Support",
    "Handcrafted",
    "Easy Returns"
  ];

  const customers = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  ];

  useEffect(() => {
    const typed = new Typed('#typed-text', {
      strings: ['Elegance', 'Comfort', 'Style', 'Class', 'Perfection'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
      smartBackspace: true,
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative bg-[#200101] overflow-hidden container mx-auto">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center lg:text-left space-y-5 sm:space-y-6 md:space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]">
                Elevate Your
                <span className="block text-amber-500 mt-1 sm:mt-2">
                  <span id="typed-text"></span>
                </span>
              </h1>
              <p className="text-white/50 max-w-lg leading-relaxed mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base mx-auto lg:mx-0">
                Discover premium fashion that blends timeless elegance with modern comfort. 
                From classic Panjabis to contemporary essentials — crafted for the discerning.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 pt-0 sm:pt-1 md:pt-2 justify-center lg:justify-start">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 sm:px-7 md:px-8 py-2 sm:py-2.5 md:py-3.5 rounded-full transition-all duration-300 shadow-xl shadow-amber-600/20 hover:shadow-amber-600/40 hover:scale-105 text-xs sm:text-sm md:text-base"
              >
                <span>Shop Now</span>
                <FaArrowRight className="text-[10px] sm:text-xs md:text-sm" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-5 sm:px-7 md:px-8 py-2 sm:py-2.5 md:py-3.5 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:border-amber-600/30 text-xs sm:text-sm md:text-base"
              >
                <FaRulerCombined className="text-[10px] sm:text-xs md:text-sm" />
                <span>View Collection</span>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 pt-1 sm:pt-2 md:pt-4 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {customers.map((img, i) => (
                  <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-[#200101] overflow-hidden">
                    <img src={img} alt="customer" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-center sm:text-left">
                <p className="text-white text-[10px] sm:text-xs md:text-sm font-medium">Join 50,000+ Happy Customers</p>
                <div className="flex items-center gap-1 justify-center sm:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-amber-500 text-[8px] sm:text-[10px] md:text-xs" />
                  ))}
                  <span className="text-white/40 text-[8px] sm:text-[10px] md:text-xs ml-1">(4.9/5)</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              <div className="bg-white/5 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 border border-white/5 hover:border-amber-600/20 transition-all duration-300 hover:bg-white/10">
                <FaTshirt className="text-amber-500 text-sm sm:text-base md:text-xl mb-0.5 sm:mb-1 md:mb-2" />
                <p className="text-base sm:text-lg md:text-xl font-bold text-white">500+</p>
                <p className="text-[8px] sm:text-[10px] md:text-xs text-white/40">Products</p>
              </div>
              <div className="bg-white/5 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 border border-white/5 hover:border-amber-600/20 transition-all duration-300 hover:bg-white/10">
                <FaShieldAlt className="text-amber-500 text-sm sm:text-base md:text-xl mb-0.5 sm:mb-1 md:mb-2" />
                <p className="text-base sm:text-lg md:text-xl font-bold text-white">4.9</p>
                <p className="text-[8px] sm:text-[10px] md:text-xs text-white/40">Rating</p>
              </div>
              <div className="bg-white/5 rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 border border-white/5 hover:border-amber-600/20 transition-all duration-300 hover:bg-white/10">
                <FaUsers className="text-amber-500 text-sm sm:text-base md:text-xl mb-0.5 sm:mb-1 md:mb-2" />
                <p className="text-base sm:text-lg md:text-xl font-bold text-white">50K+</p>
                <p className="text-[8px] sm:text-[10px] md:text-xs text-white/40">Customers</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative float-animation">
              <div className="absolute -inset-4 bg-[#200101]/50 rounded-3xl blur-xl"></div>
              <div className="relative bg-[#200101] rounded-3xl p-3 border border-white/10 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden h-full w-full aspect-square">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                    >
                      <img 
                        src={slide.image} 
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                  ))}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
                    <p className="text-amber-600 text-[8px] sm:text-[10px] md:text-xs tracking-[0.2em] uppercase font-medium">
                      {slides[currentSlide].label}
                    </p>
                    <h3 className="text-white font-bold text-base sm:text-lg md:text-2xl mt-0.5 sm:mt-1">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-white/50 text-[10px] sm:text-xs md:text-sm">
                      {slides[currentSlide].subtitle}
                    </p>
                  </div>
                  <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 flex gap-1.5">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 ${
                          index === currentSlide 
                            ? 'w-5 sm:w-6 md:w-8 h-1 bg-amber-600' 
                            : 'w-2 sm:w-3 md:w-4 h-1 bg-white/20 hover:bg-white/40'
                        } rounded-full`}
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-amber-600 text-white text-[8px] sm:text-[10px] md:text-xs font-bold px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full shadow-xl shadow-amber-600/30">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <FaGem className="text-[8px] sm:text-[10px] md:text-xs" />
                    <span>Premium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/5 bg-[#200101] py-2 sm:py-3 md:py-4 overflow-hidden" style={{ transform: 'rotate(0.5deg) skewY(-0.5deg)' }}>
        <div className="absolute inset-0 bg-[#200101]"></div>
        <div className="flex whitespace-nowrap marquee-track" style={{ transform: 'rotate(-0.5deg) skewY(0.5deg)' }}>
          {[...features, ...features, ...features].map((f, i) => (
            <span key={i} className="flex items-center gap-1.5 sm:gap-2 text-white/40 text-[10px] sm:text-xs md:text-sm px-4 sm:px-6 md:px-8">
              <FaCheckCircle className="text-amber-600 text-[8px] sm:text-[10px] md:text-xs" />
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;