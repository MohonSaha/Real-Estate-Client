import { Button } from "~/components/ui/button";
import type { Route } from "./+types/home";
import SectionContainer from "~/components/shared/SectionContainer";
import HeroSection from "~/pages/Home/HeroSection/HeroSection";
import RealEstateSearch from "~/pages/Home/RealEstateSearch/RealEstateSearch";
import PropertyListingsSlider from "~/pages/Home/PropertyListingsSlider/PropertyListingsSlider";
import PropertyListing from "~/pages/Home/PropertyListing/PropertyListing";
import ContactUs from "~/components/shared/contactUs";
import FAQSection from "~/components/shared/FAQSection";
import TextMarquee from "~/pages/Home/TextMarquee/TextMarquee";

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
        <HeroSection />
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

      <div className="mt-8">
        <ContactUs />
      </div>

      <SectionContainer>
        <div className="mt-24">
          <FAQSection />
        </div>
      </SectionContainer>

      <div className="mt-24">
        <SectionContainer>
          <div className="border-t border-2" />
        </SectionContainer>
        <TextMarquee />
        <SectionContainer>
          <div className="border-b border-2" />
        </SectionContainer>
      </div>

      <SectionContainer>
        <main className="container py-10">
          <section className="py-20 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Welcome to our website
            </h1>
            <p className="mx-auto mt-6 max-w-md text-lg text-muted-foreground">
              A beautiful responsive navbar using shadcn/ui components
            </p>
          </section>

          {/* Sample content sections to demonstrate scrolling */}
          {["features", "pricing", "about", "contact"].map((section) => (
            <section
              key={section}
              id={section}
              className="min-h-[50vh] py-20 text-center"
            >
              <h2 className="text-3xl font-bold capitalize">{section}</h2>
              <div className="mt-10 h-40 rounded-lg bg-muted"></div>
            </section>
          ))}
        </main>
      </SectionContainer>
    </>
  );
}
