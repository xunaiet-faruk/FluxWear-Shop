import { Link } from 'react-router';
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
      <div className="fixed right-0 top-0 h-full w-full sm:w-[420px] bg-gradient-to-b from-[#1a0101] to-[#200101] border-l border-white/10 z-50 shadow-2xl transition-all duration-500 ease-out transform translate-x-0">
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-white/5 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            Your Cart
            <span className="text-sm bg-amber-600/20 text-amber-600 px-3 py-0.5 rounded-full">
              {totalItems}
            </span>
          </h2>
          <button
            onClick={onClose}
            className="text-white/50 cursor-pointer hover:text-white hover:bg-white/10 transition-all duration-300 p-2 rounded-full hover:rotate-90"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5" style={{ maxHeight: 'calc(100vh - 180px)' }}>
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-7xl mb-5 opacity-50">🛒</div>
              <h3 className="text-white font-semibold text-xl mb-2">Your Cart is Empty</h3>
              <p className="text-white/40 text-sm mb-6">
                Start shopping to add items to your cart.
              </p>
              <button
                onClick={onClose}
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-600/30"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white/5 hover:bg-white/10 rounded-xl p-3 border border-white/5 hover:border-amber-600/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/10"
                >
                  <div className="flex gap-3">
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white/5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0">
                          <h4 className="text-white font-medium text-sm truncate hover:text-amber-600 transition-colors duration-300">
                            {item.name}
                          </h4>
                          <p className="text-white/40 text-xs">
                            {item.color && `${item.color}`}{item.color && item.size && ' · '}{item.size && `${item.size}`}
                          </p>
                        </div>
                        <button
                          onClick={() => handleRemove(item.id, item.name)}
                          className="text-white/30 cursor-pointer hover:text-red-500 transition-all duration-300 p-1 hover:scale-110"
                        >
                          <FaTrash className="text-xs" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1 bg-white/5 rounded-full border border-white/5">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full hover:bg-white/10 text-white transition-all duration-300 flex items-center justify-center hover:scale-110"
                          >
                            <FaMinus className="text-xs" />
                          </button>
                          <span className="text-white font-medium text-sm w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full hover:bg-white/10 text-white transition-all duration-300 flex items-center justify-center hover:scale-110"
                          >
                            <FaPlus className="text-xs" />
                          </button>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-bold text-sm">
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
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-white/10 bg-gradient-to-t from-[#1a0101] to-transparent backdrop-blur-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-white/60 text-sm">Total</span>
              <span className="text-white font-bold text-2xl text-amber-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex gap-3">
              <Link
                to="/products"
                onClick={onClose}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-600/30"
              >
                <FaPaypal />
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