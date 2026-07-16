import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import {
  FaShoppingBag,
  FaArrowRight,
  FaFire,
  FaTag,
  FaStar,
  FaTruck,
  FaShieldAlt,
  FaClock
} from 'react-icons/fa';

const ProductBanner = ({  categoryCount }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      title: "Premium Panjabi Collection",
      subtitle: "Handcrafted with finest materials for your special moments",
      image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=1200&h=800&fit=crop",
      badge: "New Collection"
    },
    {
      id: 2,
      title: "Modern Essentials",
      subtitle: "Where comfort meets contemporary style",
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=1200&h=800&fit=crop",
      badge: "Trending Now"
    },
    {
      id: 3,
      title: "Summer Collection 2026",
      subtitle: "Stay cool and stylish this season",
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=1200&h=800&fit=crop",
      badge: "Limited Time"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [banners.length]);

  const features = [
    { icon: <FaTruck />, label: "Free Shipping", value: "Orders $50+" },
    { icon: <FaShieldAlt />, label: "Secure Payment", value: "100% protected" },
    { icon: <FaClock />, label: "Fast Delivery", value: "2–3 days" },
    { icon: <FaStar />, label: "Premium Quality", value: "100% authentic" }
  ];

  const active = banners[currentSlide];

  return (
    <section className="relative mb-8  rounded-2xl border-2 border-dashed border-[#C99A3D]/30 bg-[#150000] p-2.5 sm:p-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-2.5 sm:gap-4">

        <div className="relative lg:col-span-3 h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px] rounded-xl overflow-hidden">
          {banners.map((banner, index) => (
            <img
              key={banner.id}
              src={banner.image}
              alt={banner.title}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
          <div className="absolute top-4 left-4 z-10 flex items-start">
            <div className="relative bg-[#F3EAD8] text-[#150000] rounded-md rounded-tl-none pl-4 pr-4 py-1.5 shadow-lg">
              <span className="absolute -top-2 left-2 w-3.5 h-3.5 rounded-full border-2 border-[#C99A3D] bg-[#150000]" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-wide uppercase">
                {active.badge}
              </span>
            </div>
          </div>

          <div className="absolute bottom-3 left-4 z-10 flex gap-1.5">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Show slide ${index + 1}`}
                className={`h-1.5 rounded-full border transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-6 bg-[#C99A3D] border-[#C99A3D]'
                    : 'w-1.5 bg-transparent border-white/50 hover:border-white'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-2 rounded-xl bg-gradient-to-b from-[#2a0404] to-[#200101] p-5 sm:p-7 flex flex-col justify-center overflow-hidden">
          <span className="hidden lg:block absolute right-2 top-1/2 -translate-y-1/2 rotate-90 origin-center text-[10px] tracking-[0.35em] uppercase text-[#C99A3D]/50 whitespace-nowrap">
            Est. Atelier
          </span>

          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-[#F3EAD8] leading-snug mb-2 pr-4">
            {active.title}
          </h1>
          <p className="text-[#F3EAD8]/60 text-sm sm:text-base mb-5 max-w-sm pr-4">
            {active.subtitle}
          </p>

          <Link
            to="/products"
            className="group inline-flex w-fit items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-5 py-2.5 rounded-full  text-sm sm:text-base"
          >
            <span>Shop Now</span>
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="my-3 sm:my-4 border-t border-dashed border-[#C99A3D]/25" />

      {/* Features + stats strip */}
      <div className="flex flex-wrap items-center justify-between gap-y-3 px-1 sm:px-2">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-7">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2.5 text-[#F3EAD8]/80">
              <span className="text-[#C99A3D] text-base sm:text-lg">{feature.icon}</span>
              <div className="leading-tight">
                <p className="text-xs sm:text-sm font-medium">{feature.label}</p>
                <p className="text-[10px] text-[#F3EAD8]/35">{feature.value}</p>
              </div>
              {index < features.length - 1 && (
                <span className="hidden sm:block ml-3 h-6 border-l border-dashed border-[#C99A3D]/20" />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 text-xs text-[#F3EAD8]/50">
            <span className="flex items-center gap-1">
              <FaShoppingBag className="text-[#C99A3D]" /> {categoryCount || 120}+ Products
            </span>
            <span className="flex items-center gap-1">
              <FaFire className="text-[#C99A3D]" /> Hot Deals
            </span>
            <span className="flex items-center gap-1">
              <FaTag className="text-[#C99A3D]" /> Best Prices
            </span>
          </div>
          <Link
            to="/products"
            className="text-[#C99A3D] hover:text-[#E4C077] text-xs sm:text-sm font-medium flex items-center gap-1 transition-colors duration-300"
          >
            View All <FaArrowRight className="text-[10px]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductBanner;