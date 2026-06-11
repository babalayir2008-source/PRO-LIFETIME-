import { HeroSection } from "../components/HeroSection";
import {Categories} from "../components/Categories"
import { Testimonials } from "../components/Testimonials";
import {Footer} from "../components/Footer"
export function Home() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <Testimonials />
      <Footer />

    </div>
  );
}