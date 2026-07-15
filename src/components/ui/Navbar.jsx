import { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import Logo from '../../assets/images/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);


  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
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
          
          <NavLink 
            to="/cart" 
            className={({ isActive }) => `
              relative text-sm lg:text-base font-medium transition-all duration-200
              flex items-center gap-1.5
              ${isActive 
                ? 'text-amber-700 font-semibold' 
                : 'text-white hover:text-amber-600'
              }
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 
              after:bg-amber-600 after:rounded-full after:transition-all after:duration-200
              ${isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}
            `}
          >
            <i className="fas fa-shopping-bag text-sm lg:text-base"></i>
            <span>Cart</span>
          </NavLink>
        </div>

       
        <div className="hidden md:block flex-shrink-0">
          <a 
            href="tel:+8801882239828" 
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm lg:text-base transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <i className="fas fa-phone-alt text-xs"></i>
            Book a Call
          </a>
        </div>

      
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-50"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

     {/* Mobile Sidebar */}
<div
  className={`md:hidden fixed top-0 left-0 h-full w-64 bg-white shadow-xl transition-transform duration-300 z-40 ${
    isMenuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <div className="flex items-center justify-between p-5 border-b">
    <h2 className="text-xl font-bold">OXIVOS</h2>

    <button
      onClick={() => setIsMenuOpen(false)}
      className="text-2xl font-bold"
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
        `py-2 transition-colors ${
          isActive
            ? "text-amber-600 font-semibold"
            : "text-gray-700 hover:text-amber-600"
        }`
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/products"
      onClick={() => setIsMenuOpen(false)}
      className={({ isActive }) =>
        `py-2 transition-colors ${
          isActive
            ? "text-amber-600 font-semibold"
            : "text-white hover:text-amber-600"
        }`
      }
    >
      Products
    </NavLink>

    <NavLink
      to="/cart"
      onClick={() => setIsMenuOpen(false)}
      className={({ isActive }) =>
        `py-2 transition-colors ${
          isActive
            ? "text-amber-600 font-semibold"
            : "text-white hover:text-amber-600"
        }`
      }
    >
      Cart
    </NavLink>
  </div>
</div>

{/* Overlay */}
{isMenuOpen && (
  <div
    onClick={() => setIsMenuOpen(false)}
    className="fixed inset-0 bg-black/40 z-30 md:hidden"
  />
)}
    </nav>
  );
};

export default Navbar;