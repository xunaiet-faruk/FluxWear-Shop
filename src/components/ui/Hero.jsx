import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import {
  FaArrowRight,
  FaCut,
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]">
                Elevate Your
                <span className="block text-amber-500 mt-2">
                  <span id="typed-text"></span>
                </span>
              </h1>
              <p className="text-white/50 max-w-lg leading-relaxed mt-5 text-sm sm:text-base">
                Discover premium fashion that blends timeless elegance with modern comfort. 
                From classic Panjabis to contemporary essentials — crafted for the discerning.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-xl shadow-amber-600/20 hover:shadow-amber-600/40 hover:scale-105"
              >
                <span>Shop Now</span>
                <FaArrowRight className="text-sm" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-full backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-105 hover:border-amber-600/30"
              >
                <FaRulerCombined className="text-sm" />
                <span>View Collection</span>
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {customers.map((img, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#200101] overflow-hidden">
                    <img src={img} alt="customer" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white text-sm font-medium">Join 50,000+ Happy Customers</p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-amber-500 text-xs" />
                  ))}
                  <span className="text-white/40 text-xs ml-1">(4.9/5)</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:border-amber-600/20 transition-all duration-300 hover:bg-white/10">
                <FaTshirt className="text-amber-500 text-xl mb-2" />
                <p className="text-xl font-bold text-white">500+</p>
                <p className="text-xs text-white/40">Products</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:border-amber-600/20 transition-all duration-300 hover:bg-white/10">
                <FaShieldAlt className="text-amber-500 text-xl mb-2" />
                <p className="text-xl font-bold text-white">4.9</p>
                <p className="text-xs text-white/40">Rating</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:border-amber-600/20 transition-all duration-300 hover:bg-white/10">
                <FaUsers className="text-amber-500 text-xl mb-2" />
                <p className="text-xl font-bold text-white">50K+</p>
                <p className="text-xs text-white/40">Customers</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative float-animation">
              <div className="absolute -inset-4 bg-[#200101]/50 rounded-3xl blur-xl"></div>
              <div className="relative bg-[#200101] rounded-3xl p-3 border border-white/10 shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden" style={{ height: '420px' }}>
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
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-amber-600 text-xs tracking-[0.2em] uppercase font-medium">
                      {slides[currentSlide].label}
                    </p>
                    <h3 className="text-white font-bold text-2xl mt-1">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-white/50 text-sm">
                      {slides[currentSlide].subtitle}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-1.5">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 ${
                          index === currentSlide 
                            ? 'w-8 h-1 bg-amber-600' 
                            : 'w-4 h-1 bg-white/20 hover:bg-white/40'
                        } rounded-full`}
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 bg-amber-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl shadow-amber-600/30">
                  <div className="flex items-center gap-1.5">
                    <FaGem className="text-xs" />
                    <span>Premium</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/5 bg-[#200101] py-4 overflow-hidden" style={{ transform: 'rotate(0.5deg) skewY(-0.5deg)' }}>
        <div className="absolute inset-0 bg-[#200101]"></div>
        <div className="flex whitespace-nowrap marquee-track" style={{ transform: 'rotate(-0.5deg) skewY(0.5deg)' }}>
          {[...features, ...features, ...features].map((f, i) => (
            <span key={i} className="flex items-center gap-2 text-white/40 text-sm px-8">
              <FaCheckCircle className="text-amber-600 text-xs" />
              {f}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;