import { useCart } from '../hooks/usecard';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
  const { items, totalPrice, totalItems, updateQuantity, removeFromCart, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#200101] flex items-center justify-center px-4 py-16">
        <div className="max-w-xl w-full text-center bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl">
          <FaShoppingCart className="mx-auto text-6xl text-amber-500 mb-6" />
          <h1 className="text-3xl font-semibold text-white mb-4">Your cart is empty</h1>
          <p className="text-white/60 mb-8">Add items to your cart to see them here.</p>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-amber-600 text-white font-semibold hover:bg-amber-700 transition-all duration-200"
          >
            <FaArrowLeft /> Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#200101] text-white px-4 py-16">
      <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[2fr_1fr]">
        <section className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold">Shopping Cart</h1>
              <p className="text-white/60 mt-2">{totalItems} item(s) in your cart</p>
            </div>
            <button
              onClick={clearCart}
              className="text-sm text-amber-500 hover:text-amber-400 transition-colors"
            >
              Clear cart
            </button>
          </div>

          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="rounded-3xl bg-white/5 border border-white/10 p-6 grid gap-4 md:grid-cols-[120px_minmax(0,_1fr)_auto] items-center">
                <img src={item.image} alt={item.name} className="h-28 w-28 rounded-2xl object-cover" />
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-white/60">{item.category}</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"
                    >
                      -
                    </button>
                    <span className="w-10 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="space-y-2 text-right">
                  <p className="text-xl font-semibold">${item.price.toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-rose-500 hover:text-rose-400 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="rounded-3xl bg-white/5 border border-white/10 p-6 space-y-6">
          <h2 className="text-2xl font-semibold">Order Summary</h2>
          <div className="flex items-center justify-between text-white/70">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="bg-white/5 rounded-3xl p-5">
            <p className="text-sm text-white/70">Shipping calculated at checkout.</p>
          </div>
          <button className="w-full rounded-full bg-amber-600 px-6 py-3 font-semibold text-black hover:bg-amber-500 transition">
            Proceed to Checkout
          </button>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
