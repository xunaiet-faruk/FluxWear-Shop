import FeaturedCategories from "../components/ui/FeaturedCategories";
import Hero from "../components/ui/Hero";
import Newsletter from "../components/ui/Newsletter";
import Testimonials from "../components/ui/Testimonials";
import WhyChooseUs from "../components/ui/WhyChooseUs";

const Home = () => {
    return (
    <>
      <Hero />
      <FeaturedCategories/>
      <WhyChooseUs/>
      <Testimonials/>
      <Newsletter/>
   
    </>
    );
};

export default Home;