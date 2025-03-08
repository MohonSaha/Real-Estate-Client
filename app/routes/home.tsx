import type { Route } from "./+types/home";
import SectionContainer from "~/components/shared/SectionContainer";
import HeroSection from "~/pages/Home/HeroSection/HeroSection";
import RealEstateSearch from "~/pages/Home/RealEstateSearch/RealEstateSearch";
import PropertyListingsSlider from "~/pages/Home/PropertyListingsSlider/PropertyListingsSlider";
import PropertyListing from "~/pages/Home/PropertyListing/PropertyListing";
import FAQSection from "~/components/shared/FAQSection";
import TextMarquee from "~/pages/Home/TextMarquee/TextMarquee";
import ImageGallery from "~/pages/Home/ImageGallery/ImageGallery";
import ContactSection from "~/components/shared/ContactSection";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <SectionContainer>
        <div className="mt-16">
          <HeroSection />
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="mt-12">
          <RealEstateSearch />
        </div>
      </SectionContainer>

      <div className="mt-12">
        <PropertyListingsSlider />
      </div>

      <SectionContainer>
        <div className="mt-6 mb-10">
          <hr />
        </div>
      </SectionContainer>

      <SectionContainer>
        <PropertyListing />
      </SectionContainer>

      <div className="mt-12">
        <ContactSection />
      </div>

      <SectionContainer>
        <div className="mt-12">
          <ImageGallery />
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="mt-12">
          <FAQSection />
        </div>
      </SectionContainer>

      <div className="mt-20">
        <SectionContainer>
          <div className="border-t border-2" />
        </SectionContainer>
        <TextMarquee />
        <SectionContainer>
          <div className="border-b border-2" />
        </SectionContainer>
      </div>
    </>
  );
}
