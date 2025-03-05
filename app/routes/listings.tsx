import FAQSection from "~/components/shared/FAQSection";
import SectionContainer from "~/components/shared/SectionContainer";
import ListingsPage from "~/pages/ListingsPage/ListingsPage/ListingsPage";

const listings = () => {
  return (
    <div>
      <SectionContainer>
        <div className="mt-16">
          <ListingsPage />
        </div>
      </SectionContainer>

      <SectionContainer>
        <div className="mt-24">
          <FAQSection />
        </div>
      </SectionContainer>
    </div>
  );
};

export default listings;
