import  { useEffect, useRef, useState } from 'react';
import { 
  FaTruck, 
  FaShieldAlt, 
  FaHeadset, 
  FaCreditCard,
  FaExchangeAlt,
  FaGem,
} from 'react-icons/fa';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      id: 1,
      icon: <FaTruck className="text-3xl" />,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders above $50. Fast and reliable delivery across the country.",
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-400"
    },
    {
      id: 2,
      icon: <FaShieldAlt className="text-3xl" />,
      title: "Secure Payment",
      description: "Your transactions are 100% secure with our advanced encryption and payment protection.",
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-400"
    },
    {
      id: 3,
      icon: <FaHeadset className="text-3xl" />,
      title: "24/7 Support",
      description: "Our dedicated support team is always ready to assist you with any questions or concerns.",
      color: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-400"
    },
    {
      id: 4,
      icon: <FaExchangeAlt className="text-3xl" />,
      title: "Easy Returns",
      description: "Not satisfied? Return within 30 days for a full refund. No questions asked.",
      color: "from-red-500/20 to-red-600/20",
      iconColor: "text-red-400"
    },
    {
      id: 5,
      icon: <FaCreditCard className="text-3xl" />,
      title: "Multiple Payment",
      description: "Choose from various payment options including cards, digital wallets, and bank transfers.",
      color: "from-yellow-500/20 to-yellow-600/20",
      iconColor: "text-yellow-400"
    },
    {
      id: 6,
      icon: <FaGem className="text-3xl" />,
      title: "Premium Quality",
      description: "We source only the finest materials and ensure every product meets our high standards.",
      color: "from-pink-500/20 to-pink-600/20",
      iconColor: "text-pink-400"
    }
  ];

;

  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-b from-[#1a0101] to-[#200101] relative overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600 rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-700 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why <span className="text-amber-600">Choose Us</span>
          </h2>
          
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            We're committed to providing you with the best shopping experience. 
            Here's why our customers trust us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group relative rounded-2xl p-6 bg-gradient-to-br ${feature.color} border border-white/5 hover:border-amber-600/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-600/10 transform hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="relative z-10">
                <div className={`${feature.iconColor} mb-4 p-3 rounded-xl bg-white/5 inline-block group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-4 flex items-center text-amber-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-amber-600 rounded-tl-lg"></div>
                <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-amber-600 rounded-tr-lg"></div>
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-amber-600 rounded-bl-lg"></div>
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-amber-600 rounded-br-lg"></div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default WhyChooseUs;