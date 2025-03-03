import type { ReactElement } from "react";

const SectionContainer = ({ children }: { children: ReactElement }) => {
  return <div className="md:px-10 px-4">{children}</div>;
};

export default SectionContainer;
