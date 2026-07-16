import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
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
      <FaStar key={index} className={`${index < rating ? 'text-amber-600' : 'text-white/20'} text-sm`} />
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
          padding: '16px',
          borderRadius: '12px',
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
          <h2 className="text-2xl text-white mb-4">Product Not Found</h2>
          <Link to="/products" className="text-amber-600 hover:text-amber-500">
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
    <div className="min-h-screen bg-[#200101] py-8">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/products" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 mb-6">
          <FaArrowLeft />
          <span>Back to Products</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div 
              className="relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 group"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <div className="relative overflow-hidden" style={{ height: '500px' }}>
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
              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaSearchPlus className="text-amber-600" />
                <span>Hover to Zoom</span>
              </div>
            </div>
            
            {productImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3 mt-4">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(img)}
                    className={`aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                      mainImage === img ? 'border-amber-600 shadow-lg shadow-amber-600/30' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">{product.name}</h1>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-white/40 text-sm">{product.category}</span>
              <span className="text-white/20">|</span>
              <div className="flex items-center gap-1">
                {renderStars(product.rating)}
                <span className="text-white/40 text-sm ml-1">({product.reviews})</span>
              </div>
              {product.inStock && (
                <>
                  <span className="text-white/20">|</span>
                  <span className="text-green-500 text-sm flex items-center gap-1">
                    <FaCheck className="text-xs" /> In Stock
                  </span>
                </>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-white">${product.price}</span>
              {product.originalPrice && (
                <span className="text-white/40 line-through">${product.originalPrice}</span>
              )}
              {product.discount && (
                <span className="bg-red-600 text-white text-sm font-bold px-2 py-1 rounded-full">
                  -{product.discount}%
                </span>
              )}
            </div>

            <p className="text-white/60 text-sm leading-relaxed">{product.description}</p>

            {product.colors && product.colors.length > 0 && (
              <div>
                <p className="text-white/60 text-sm mb-2">Color: <span className="text-white">{selectedColor}</span></p>
                <div className="flex gap-2 flex-wrap">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
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
                <p className="text-white/60 text-sm mb-2">Size: <span className="text-white">{selectedSize}</span></p>
                <div className="flex gap-2 flex-wrap">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-full text-sm font-medium transition-all duration-300 ${
                        selectedSize === size ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30' : 'bg-white/5 text-white/60 hover:bg-white/10'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-4">
              <label className="text-white/60 text-sm">Quantity:</label>
              <div className="flex items-center gap-2 bg-white/5 rounded-full border border-white/10">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full hover:bg-white/10 text-white transition-colors duration-300 flex items-center justify-center"
                >
                  <FaMinus className="text-xs" />
                </button>
                <span className="text-white font-medium w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full hover:bg-white/10 text-white transition-colors duration-300 flex items-center justify-center"
                >
                  <FaPlus className="text-xs" />
                </button>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 cursor-pointer flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  addedToCart
                    ? 'bg-green-600 text-white'
                    : product.inStock
                    ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-lg hover:shadow-amber-600/30 hover:scale-[1.02]'
                    : 'bg-white/10 text-white/40 cursor-not-allowed'
                }`}
              >
                {addedToCart ? (
                  <>
                    <FaCheck /> Added!
                  </>
                ) : (
                  <>
                    <FaShoppingCart /> Add to Cart
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