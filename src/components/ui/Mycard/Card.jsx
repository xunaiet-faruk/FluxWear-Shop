import { Link } from 'react-router-dom';
import { FaTimes, FaTrash, FaPlus, FaMinus, FaPaypal } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import { useCart } from '../../../hooks/usecard';

const Card = ({ isOpen, onClose }) => {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  if (!isOpen) return null;

  const handleRemove = (id, name) => {
    removeFromCart(id);
    toast.error(`🗑️ ${name} removed from cart`, {
      style: {
        background: '#1a0101',
        color: '#fff',
        border: '1px solid rgba(218, 41, 41, 0.3)',
        padding: '16px',
        borderRadius: '12px',
      },
      duration: 3000,
    });
  };

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />

      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 h-full w-full sm:w-3/4 md:w-[420px] bg-gradient-to-b from-[#1a0101] to-[#200101] border-l border-white/10 z-50 shadow-2xl transition-all duration-500 ease-out transform translate-x-0">
        <div className="flex items-center justify-between p-3 sm:p-4 md:p-5 border-b border-white/10 bg-white/5 backdrop-blur-sm">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-white flex items-center gap-2">
            Your Cart
            <span className="text-[10px] sm:text-xs md:text-sm bg-amber-600/20 text-amber-600 px-1.5 sm:px-2 md:px-3 py-0.5 rounded-full">
              {totalItems}
            </span>
          </h2>
          <button
            onClick={onClose}
            className="text-white/50 cursor-pointer hover:text-white hover:bg-white/10 transition-all duration-300 p-1 sm:p-1.5 md:p-2 rounded-full hover:rotate-90"
          >
            <FaTimes className="text-base sm:text-lg md:text-xl" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-5" style={{ maxHeight: 'calc(100vh - 170px)' }}>
          {items.length === 0 ? (
            <div className="text-center py-10 sm:py-12 md:py-16">
              <div className="text-4xl sm:text-5xl md:text-7xl mb-3 sm:mb-4 md:mb-5 opacity-50">🛒</div>
              <h3 className="text-white font-semibold text-base sm:text-lg md:text-xl mb-2">Your Cart is Empty</h3>
              <p className="text-white/40 text-[10px] sm:text-xs md:text-sm mb-3 sm:mb-4 md:mb-6">
                Start shopping to add items to your cart.
              </p>
              <button
                onClick={onClose}
                className="bg-amber-600 hover:bg-amber-700 text-white px-5 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-600/30 text-xs sm:text-sm md:text-base"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/5 hover:bg-white/10 rounded-xl p-2 sm:p-2.5 md:p-3 border border-white/5 hover:border-amber-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/10"
                >
                  <div className="flex gap-2 sm:gap-2.5 md:gap-3">
                    <div className="relative w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white/5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-medium text-[10px] sm:text-xs md:text-sm truncate hover:text-amber-600 transition-colors duration-300">
                            {item.name}
                          </h4>
                          <p className="text-white/40 text-[8px] sm:text-[10px] md:text-xs">
                            {item.color && `${item.color}`}{item.color && item.size && ' · '}{item.size && `${item.size}`}
                          </p>
                        </div>
                        <button
                          onClick={() => handleRemove(item.id, item.name)}
                          className="text-white/30 cursor-pointer hover:text-red-500 transition-all duration-300 p-0.5 sm:p-1 hover:scale-110"
                        >
                          <FaTrash className="text-[8px] sm:text-[10px] md:text-xs" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-1 sm:mt-1.5 md:mt-2">
                        <div className="flex items-center gap-0.5 sm:gap-1 bg-white/5 rounded-full border border-white/5">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 rounded-full hover:bg-white/10 text-white transition-all duration-300 flex items-center justify-center hover:scale-110"
                          >
                            <FaMinus className="text-[6px] sm:text-[8px] md:text-xs" />
                          </button>
                          <span className="text-white font-medium text-[10px] sm:text-xs md:text-sm w-4 sm:w-5 md:w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 rounded-full hover:bg-white/10 text-white transition-all duration-300 flex items-center justify-center hover:scale-110"
                          >
                            <FaPlus className="text-[6px] sm:text-[8px] md:text-xs" />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-bold text-[10px] sm:text-xs md:text-sm">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3 md:p-5 border-t border-white/10 bg-gradient-to-t from-[#1a0101] to-transparent backdrop-blur-sm">
            <div className="flex items-center justify-between mb-1.5 sm:mb-2 md:mb-3">
              <span className="text-white/60 text-[8px] sm:text-[10px] md:text-sm">Total</span>
              <span className="text-white font-bold text-sm sm:text-base md:text-2xl text-amber-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex gap-1.5 sm:gap-2 md:gap-3">
              <Link
                to="/products"
                onClick={onClose}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-1.5 sm:py-2 md:py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-600/30 text-[8px] sm:text-[10px] md:text-sm"
              >
                <FaPaypal className="text-[8px] sm:text-[10px] md:text-sm" />
                Pay Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;