import { Outlet } from "react-router";
import Footer from "~/components/shared/Footer";
import { Navbar } from "~/components/shared/navbar";
import SectionContainer from "~/components/shared/SectionContainer";

export default function MainLayout() {
  return (
    <div>
      <SectionContainer>
        <Navbar></Navbar>
      </SectionContainer>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <div className="mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
}
