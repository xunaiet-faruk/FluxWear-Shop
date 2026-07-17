import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaShoppingBag, 
  FaEye
} from 'react-icons/fa';
import { categoriesData } from '../../data/categories';

const FeaturedCategories = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [visibleCategories, setVisibleCategories] = useState([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryId = parseInt(entry.target.dataset.id);
            setVisibleCategories(prev => [...prev, categoryId]);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.category-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const getFilteredCategories = () => {
    if (activeTab === 'all') return categoriesData;
    if (activeTab === 'trending') return categoriesData.slice(0, 3);
    if (activeTab === 'new') return categoriesData.slice(2, 5);
    return categoriesData;
  };

  const filteredData = getFilteredCategories();

  return (
    <section className="py-16 lg:py-24  relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
        
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-amber-600">Categories</span>
          </h2>
          
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Explore our curated collection of premium fashion categories. 
            Find the perfect style that matches your personality.
          </p>

          <div className="flex justify-center gap-2 sm:gap-4 mt-6 flex-wrap">
            {['all', 'trending', 'new'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {tab === 'all' && 'All Categories'}
                {tab === 'trending' && '🔥 Trending'}
                {tab === 'new' && '✨ New Arrivals'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredData.map((category, index) => (
            <Link
              key={category.id}
              to={"/Products"}
              className="category-card group relative block"
              data-id={category.id}
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: visibleCategories.includes(category.id) ? 1 : 0,
                transform: visibleCategories.includes(category.id) 
                  ? 'translateY(0)' 
                  : 'translateY(30px)',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/5 hover:border-amber-600/30 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-amber-600/20">
                
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  <div className={`absolute inset-0 bg-amber-600/20 transition-opacity duration-500 ${
                    hoveredId === category.id ? 'opacity-100' : 'opacity-0'
                  }`}></div>

                  <div className="absolute top-3 right-3 text-2xl bg-black/30 backdrop-blur-sm p-2 rounded-full">
                    {category.icon}
                  </div>

                  <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium border border-white/10">
                    <FaShoppingBag className="inline mr-1 text-amber-600" />
                    {category.productCount} Products
                  </div>

                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    hoveredId === category.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}>
                    <div className="bg-amber-600 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-transform duration-300">
                      <FaEye className="text-xl" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg sm:text-xl mb-1 group-hover:text-amber-600 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-white/60 text-xs sm:text-sm mb-2">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center text-amber-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                      <span>Explore Now</span>
                      <FaArrowRight className="ml-2 text-xs" />
                    </div>
                  </div>
                </div>

                <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 ${
                  hoveredId === category.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-600 rounded-tl-xl"></div>
                  <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-600 rounded-tr-xl"></div>
                  <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-600 rounded-bl-xl"></div>
                  <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-600 rounded-br-xl"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

       <div className="text-center mt-8 sm:mt-10 md:mt-12">
  <Link
    to="/Products"
    className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-600/30 hover:scale-105 transform text-xs sm:text-sm md:text-base"
  >
    <span>View All Categories</span>
    <FaArrowRight className="text-[10px] sm:text-xs md:text-sm" />
  </Link>
</div>
      </div>
    </section>
  );
};

export default FeaturedCategories;