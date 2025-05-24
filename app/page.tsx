import Navbar from '../components/Navbar';
import HeroSection from '../components/home/HeroSection';
import ValuesSection from '../components/home/ValuesSection';
import CategoriesSection from '../components/home/CategoriesSection';
import FeaturedProductsSection from '../components/home/FeaturedProductsSection';
import CustomTagsSection from '../components/home/CustomTagsSection';
import IndustrySolutionsSection from '../components/home/IndustrySolutionsSection';
import ReviewsSection from '../components/home/ReviewsSection';
import FooterSection from '../components/home/FooterSection';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ValuesSection />
      <CategoriesSection />
      <FeaturedProductsSection />
      <CustomTagsSection />
      <IndustrySolutionsSection />
      <ReviewsSection />
      <FooterSection />
    </div>
  );
}
