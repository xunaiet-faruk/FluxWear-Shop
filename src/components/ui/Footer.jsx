import { NavLink } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#200101] text-white/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
     
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
                      <img className='w-32' src={Logo} alt="FluxWear Logo" />
            
            <p className="text-sm leading-relaxed mb-4">
              Premium fashion for the modern individual. We curate timeless pieces that blend style, comfort, and quality.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-amber-600 transition-colors duration-200">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-amber-600 transition-colors duration-200">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-amber-600 transition-colors duration-200">
                <i className="fab fa-twitter text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-amber-600 transition-colors duration-200">
                <i className="fab fa-youtube text-sm"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <NavLink to="/" className="text-sm hover:text-amber-500 transition-colors duration-200">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="text-sm hover:text-amber-500 transition-colors duration-200">
                  All Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" className="text-sm hover:text-amber-500 transition-colors duration-200">
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Categories</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-sm hover:text-amber-500 transition-colors duration-200">
                  Panjabi
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-amber-500 transition-colors duration-200">
                  Shirts
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-amber-500 transition-colors duration-200">
                  T-Shirts
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-amber-500 transition-colors duration-200">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <i className="fas fa-phone-alt text-amber-500 mt-0.5"></i>
                <a href="tel:+8801882239828" className="hover:text-amber-500 transition-colors duration-200">
                  +880 1882239828
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <i className="fas fa-envelope text-amber-500 mt-0.5"></i>
                <a href="mailto:hello@FluxWear.com" className="hover:text-amber-500 transition-colors duration-200">
                  hello@FluxWear.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <i className="fas fa-map-marker-alt text-amber-500 mt-0.5"></i>
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <i className="far fa-clock text-amber-500 mt-0.5"></i>
                <span>Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/60">
            &copy; {currentYear} OXIVOS. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <a href="#" className="hover:text-amber-500 transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="w-px h-3 bg-white/20"></span>
            <a href="#" className="hover:text-amber-500 transition-colors duration-200">
              Terms of Service
            </a>
            <span className="w-px h-3 bg-white/20"></span>
            <a href="#" className="hover:text-amber-500 transition-colors duration-200">
              Returns
            </a>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/60">
            <span>Made with</span>
            <i className="fas fa-heart text-red-500 text-xs"></i>
            <span>in Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;