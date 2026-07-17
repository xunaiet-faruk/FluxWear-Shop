import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaArrowLeft, FaMinus, FaPlus, FaCheck, FaSearchPlus } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { productsData } from '../../../data/products';
import { useCart } from '../../../hooks/usecard';
import Loading from '../Loading';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [addedToCart, setAddedToCart] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { addToCart } = useCart();

  useEffect(() => {
    const found = productsData.find(p => p.id === parseInt(id));
    if (found) {
      setProduct(found);
      if (found.images && found.images.length > 0) {
        setMainImage(found.images[0]);
      }
      if (found.sizes && found.sizes.length > 0) {
        setSelectedSize(found.sizes[0]);
      }
      if (found.colors && found.colors.length > 0) {
        setSelectedColor(found.colors[0]);
      }
    }
    setLoading(false);
  }, [id]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar key={index} className={`${index < rating ? 'text-amber-600' : 'text-white/20'} text-[10px] sm:text-xs md:text-sm`} />
    ));
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images ? product.images[0] : product.image,
        size: selectedSize || 'M',
        color: selectedColor || 'White'
      });
      setAddedToCart(true);
      
      toast.success(`✨ ${product.name} added to cart!`, {
        style: {
          background: '#1a0101',
          color: '#fff',
          border: '1px solid rgba(251, 191, 36, 0.3)',
          padding: '12px sm:16px',
          borderRadius: '12px',
          fontSize: '12px sm:14px',
        },
        icon: '🛒',
        duration: 3000,
      });
      
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  if (loading) {
    return <Loading fullScreen text="Loading product details..." />;
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#200101] flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl text-white mb-4">Product Not Found</h2>
          <Link to="/products" className="text-amber-600 hover:text-amber-500 text-sm sm:text-base">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image || 'https://via.placeholder.com/400'];

  return (
    <div className="min-h-screen bg-[#200101] py-6 sm:py-8">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/products" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 mb-4 sm:mb-6 text-xs sm:text-sm">
          <FaArrowLeft className="text-[10px] sm:text-xs" />
          <span>Back to Products</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <div 
              className="relative bg-white/5 rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 group"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <div className="relative overflow-hidden" style={{ height: '300px sm:400px md:500px' }}>
                <img 
                  src={mainImage} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-200"
                  style={{
                    transform: isZoomed ? 'scale(2.5)' : 'scale(1)',
                    transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                  }}
                />
                {isZoomed && (
                  <div className="absolute inset-0 border-2 border-amber-600/50 pointer-events-none"></div>
                )}
              </div>
              <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-black/70 backdrop-blur-sm text-white text-[8px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-full flex items-center gap-1.5 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaSearchPlus className="text-amber-600 text-[8px] sm:text-xs" />
                <span>Hover to Zoom</span>
              </div>
            </div>
            
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-3 sm:mt-4">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(img)}
                    className={`aspect-square rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                      mainImage === img ? 'border-amber-600 shadow-lg shadow-amber-600/30' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{product.name}</h1>

            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              <span className="text-white/40 text-[10px] sm:text-sm">{product.category}</span>
              <span className="text-white/20 text-[10px] sm:text-sm">|</span>
              <div className="flex items-center gap-0.5 sm:gap-1">
                {renderStars(product.rating)}
                <span className="text-white/40 text-[10px] sm:text-sm ml-1">({product.reviews})</span>
              </div>
              {product.inStock && (
                <>
                  <span className="text-white/20 text-[10px] sm:text-sm">|</span>
                  <span className="text-green-500 text-[10px] sm:text-sm flex items-center gap-1">
                    <FaCheck className="text-[8px] sm:text-xs" /> In Stock
                  </span>
                </>
              )}
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl font-bold text-white">${product.price}</span>
              {product.originalPrice && (
                <span className="text-white/40 line-through text-sm sm:text-base">${product.originalPrice}</span>
              )}
              {product.discount && (
                <span className="bg-red-600 text-white text-[10px] sm:text-sm font-bold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                  -{product.discount}%
                </span>
              )}
            </div>

            <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{product.description}</p>

            {product.colors && product.colors.length > 0 && (
              <div>
                <p className="text-white/60 text-[10px] sm:text-sm mb-1.5 sm:mb-2">Color: <span className="text-white text-xs sm:text-sm">{selectedColor}</span></p>
                <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-[9px] sm:text-xs md:text-sm transition-all duration-300 ${
                        selectedColor === color ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30' : 'bg-white/5 text-white/60 hover:bg-white/10'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {product.sizes && product.sizes.length > 0 && (
              <div>
                <p className="text-white/60 text-[10px] sm:text-sm mb-1.5 sm:mb-2">Size: <span className="text-white text-xs sm:text-sm">{selectedSize}</span></p>
                <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 rounded-full text-[10px] sm:text-xs md:text-sm font-medium transition-all duration-300 ${
                        selectedSize === size ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30' : 'bg-white/5 text-white/60 hover:bg-white/10'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-2 sm:gap-4">
              <label className="text-white/60 text-[10px] sm:text-sm">Quantity:</label>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 rounded-full border border-white/10">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 rounded-full hover:bg-white/10 text-white transition-colors duration-300 flex items-center justify-center"
                >
                  <FaMinus className="text-[8px] sm:text-xs" />
                </button>
                <span className="text-white font-medium w-7 sm:w-8 md:w-10 text-center text-xs sm:text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 rounded-full hover:bg-white/10 text-white transition-colors duration-300 flex items-center justify-center"
                >
                  <FaPlus className="text-[8px] sm:text-xs" />
                </button>
              </div>
            </div>

            <div className="flex gap-2 sm:gap-3 pt-1 sm:pt-2">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 cursor-pointer flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full font-semibold transition-all duration-300 text-[10px] sm:text-xs md:text-sm ${
                  addedToCart
                    ? 'bg-green-600 text-white'
                    : product.inStock
                    ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-lg hover:shadow-amber-600/30 hover:scale-[1.02]'
                    : 'bg-white/10 text-white/40 cursor-not-allowed'
                }`}
              >
                {addedToCart ? (
                  <>
                    <FaCheck className="text-[8px] sm:text-xs" /> Added!
                  </>
                ) : (
                  <>
                    <FaShoppingCart className="text-[8px] sm:text-xs" /> Add to Cart
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;