import React, { useState } from 'react';
import { FaEnvelope, FaPaperPlane, FaCheckCircle, FaBell, FaGift } from 'react-icons/fa';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
      
      setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-[#200101] to-[#1a0101] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600 rounded-full filter blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-500 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-amber-700 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Subscribe to Our <span className="text-amber-600">Newsletter</span>
          </h2>
          
          <p className="text-white/60 max-w-2xl mx-auto text-xs sm:text-sm lg:text-base px-4 sm:px-0">
            Get the latest updates on new arrivals, exclusive offers, and fashion tips 
            delivered straight to your inbox.
          </p>
        </div>

        <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 border border-white/10 backdrop-blur-sm relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-amber-600/20 hover:border-amber-600/30">
          <div className="absolute top-0 right-0 w-40 h-40 bg-amber-600/10 rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-amber-600/10 rounded-full filter blur-2xl"></div>

          <div className="relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 text-white/80">
                <div className="bg-amber-600/20 p-1.5 sm:p-2 rounded-full text-amber-600">
                  <FaGift className="text-xs sm:text-sm lg:text-base" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-white">Exclusive Offers</p>
                  <p className="text-[10px] sm:text-xs text-white/50">Members only deals</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-white/80">
                <div className="bg-amber-600/20 p-1.5 sm:p-2 rounded-full text-amber-600">
                  <FaBell className="text-xs sm:text-sm lg:text-base" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-white">Early Access</p>
                  <p className="text-[10px] sm:text-xs text-white/50">New arrivals first</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-white/80">
                <div className="bg-amber-600/20 p-1.5 sm:p-2 rounded-full text-amber-600">
                  <FaCheckCircle className="text-xs sm:text-sm lg:text-base" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-white">No Spam</p>
                  <p className="text-[10px] sm:text-xs text-white/50">Unsubscribe anytime</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
                  <FaEnvelope className="text-white/40 text-xs sm:text-sm" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-8 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-3.5 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-amber-600/50 focus:ring-2 focus:ring-amber-600/20 transition-all duration-300 text-xs sm:text-sm lg:text-base"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading || isSubscribed}
                className={`px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] text-xs sm:text-sm lg:text-base ${
                  isSubscribed
                    ? 'bg-green-500 text-white cursor-default'
                    : 'bg-amber-600 hover:bg-amber-700 text-white shadow-lg hover:shadow-amber-600/30 hover:scale-105'
                }`}
              >
                {isLoading ? (
                  <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : isSubscribed ? (
                  <>
                    <FaCheckCircle className="text-xs sm:text-sm" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    Subscribe
                    <FaPaperPlane className="text-xs sm:text-sm" />
                  </>
                )}
              </button>
            </form>

            {isSubscribed && (
              <div className="mt-3 sm:mt-4 text-center text-green-400 text-xs sm:text-sm">
                <FaCheckCircle className="inline mr-1 sm:mr-2" />
                Thank you for subscribing! Check your email for confirmation.
              </div>
            )}

            <p className="text-[10px] sm:text-xs text-white/40 text-center mt-3 sm:mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;