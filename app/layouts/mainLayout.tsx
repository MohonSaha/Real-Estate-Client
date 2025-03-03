import { Outlet } from "react-router";
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
      {/* <Footer></Footer> */}
    </div>
  );
}
