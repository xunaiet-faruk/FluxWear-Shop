import React, { useState, useEffect, useRef } from 'react';
import { FaStar, FaQuoteLeft, FaQuoteRight, FaArrowLeft, FaArrowRight, FaUserCircle } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Rahman Khan",
      location: "Dhaka, Bangladesh",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "The quality of their Panjabi collection is outstanding! I've been a customer for over 2 years and never been disappointed. The fabric quality and craftsmanship are truly premium.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Sadia Rahman",
      location: "Chittagong, Bangladesh",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Absolutely love their modern fashion line! The designs are unique and the customer service is exceptional. Fast delivery and secure packaging. Highly recommended!",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Kamal Hossain",
      location: "Sylhet, Bangladesh",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      comment: "Great experience shopping here. The product quality matches the description perfectly. Their return policy is hassle-free. Will definitely shop again.",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "Nadia Akter",
      location: "Rajshahi, Bangladesh",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Best online shopping experience in Bangladesh! The variety of products and affordable prices make this my go-to fashion destination.",
      date: "1 week ago"
    },
    {
      id: 5,
      name: "Tariq Islam",
      location: "Khulna, Bangladesh",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Impressive collection of both traditional and modern wear. The fit and finish of their products are excellent. Keep up the good work!",
      date: "2 months ago"
    },
    {
      id: 6,
      name: "Farhana Akter",
      location: "Barishal, Bangladesh",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      comment: "Amazing quality and service! The delivery was super fast and the packaging was beautiful. Will definitely order again.",
      date: "1 week ago"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 2));
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);


  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={`${index < rating ? 'text-amber-600' : 'text-white/20'} text-sm`}
      />
    ));
  };

  const getVisibleTestimonials = () => {
    const start = currentIndex * 2;
    const end = start + 2;
    return testimonials.slice(start, end);
  };

  const totalSlides = Math.ceil(testimonials.length / 2);

  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-24 bg-gradient-to-b from-[#1a0101] to-[#200101] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-600 rounded-full filter blur-3xl"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-700 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-amber-600 px-4 py-2 rounded-full text-sm font-medium border border-white/10 mb-4">
            <FaQuoteLeft className="text-amber-600" />
            <span>Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our <span className="text-amber-600">Customers Say</span>
          </h2>
          
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
            Read what our valued customers have to say about their experience with us.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {getVisibleTestimonials().map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-6 sm:p-8 border border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-600/20 hover:border-amber-600/30 h-full"
                      >
                        <div className="flex flex-col items-start">
                          <div className="flex items-center gap-4 w-full mb-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-600/30 flex-shrink-0">
                              {testimonial.image ? (
                                <img 
                                  src={testimonial.image} 
                                  alt={testimonial.name}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="w-full h-full bg-amber-600/20 flex items-center justify-center">
                                  <FaUserCircle className="text-3xl text-white/40" />
                                </div>
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white font-semibold text-base truncate">
                                {testimonial.name}
                              </h4>
                              <p className="text-white/40 text-sm truncate">
                                {testimonial.location}
                              </p>
                              <p className="text-white/30 text-xs">
                                {testimonial.date}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1 mb-3">
                            {renderStars(testimonial.rating)}
                            <span className="text-white/40 text-sm ml-2">
                              ({testimonial.rating}/5)
                            </span>
                          </div>
                          
                          <div className="relative flex-1">
                            <FaQuoteLeft className="text-amber-600/20 text-3xl absolute -top-1 -left-1" />
                            <p className="text-white/80 text-sm leading-relaxed pl-6 line-clamp-4">
                              {testimonial.comment}
                            </p>
                            <FaQuoteRight className="text-amber-600/20 text-3xl absolute -bottom-1 -right-1" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
    
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-amber-600 rounded-full'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40 rounded-full'
                }`}
              />
            ))}
          </div>
        </div>
      </div>


    </section>
  );
};

export default Testimonials;