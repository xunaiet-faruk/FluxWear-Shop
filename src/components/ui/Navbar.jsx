import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import Logo from '../../assets/images/Logo.png';
import { SlBasketLoaded } from 'react-icons/sl';
import { useCart } from '../../hooks/usecard';
import Card from './Mycard/Card';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsCartOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (isMenuOpen || isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isCartOpen]);

  return (
    <>
      <nav className="bg-[#200101] shadow-xl px-4 sm:px-6 lg:px-8 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 lg:h-20">
          <NavLink 
            to="/" 
            className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-gray-900 hover:text-amber-600 transition-colors flex-shrink-0"
          >
            <img className='w-32' src={Logo} alt="FluxWear Logo" />
          </NavLink>

          <div className="hidden md:flex items-center justify-center gap-8 lg:gap-12 absolute left-1/2 transform -translate-x-1/2">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => `
                relative text-sm lg:text-base font-medium transition-all duration-200
                ${isActive 
                  ? 'text-amber-700 font-semibold' 
                  : 'text-white hover:text-amber-600'
                }
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 
                after:bg-amber-600 after:rounded-full after:transition-all after:duration-200
                ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}
              `}
            >
              Home
            </NavLink>
            
            <NavLink 
              to="/products" 
              className={({ isActive }) => `
                relative text-sm lg:text-base font-medium transition-all duration-200
                ${isActive 
                  ? 'text-amber-700 font-semibold' 
                  : 'text-white hover:text-amber-600'
                }
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 
                after:bg-amber-600 after:rounded-full after:transition-all after:duration-200
                ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}
              `}
            >
              Products
            </NavLink>
           
          </div>

          <div className="hidden md:block flex-shrink-0">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative cursor-pointer inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm lg:text-base transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
            >
              <SlBasketLoaded />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-colors relative z-50"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="md:hidden relative text-white hover:text-amber-600 transition-colors duration-300"
          >
            <SlBasketLoaded className="text-xl" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        <div
          className={`md:hidden fixed top-0 left-0 h-full w-64 bg-[#1a0101] shadow-2xl transition-transform duration-500 ease-out z-40 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-white/10">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white/60 hover:text-white hover:rotate-90 transition-all duration-300 text-2xl"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col p-5 gap-3">
            <NavLink
              to="/"
              end
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `py-2 transition-all duration-300 hover:pl-2 ${
                  isActive
                    ? "text-amber-600 font-semibold"
                    : "text-white/70 hover:text-amber-600 hover:pl-2"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `py-2 transition-all duration-300 hover:pl-2 ${
                  isActive
                    ? "text-amber-600 font-semibold"
                    : "text-white/70 hover:text-amber-600 hover:pl-2"
                }`
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `py-2 transition-all duration-300 hover:pl-2 ${
                  isActive
                    ? "text-amber-600 font-semibold"
                    : "text-white/70 hover:text-amber-600 hover:pl-2"
                }`
              }
            >
              Cart
            </NavLink>
          </div>
        </div>

        {isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden animate-fadeIn"
          />
        )}
      </nav>

      <Card 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  );
};

export default Navbar;