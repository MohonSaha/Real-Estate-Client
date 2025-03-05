import FAQSection from "~/components/shared/FAQSection";
import SectionContainer from "~/components/shared/SectionContainer";
import TextMarquee from "~/pages/Home/TextMarquee/TextMarquee";

const contact = () => {
  return (
    <div>
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
    </div>
  );
};

export default contact;
