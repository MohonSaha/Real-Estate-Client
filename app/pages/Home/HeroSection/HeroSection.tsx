import React from "react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative w-full bg-white py-16  flex flex-col md:flex-row justify-between items-start h-[340px]">
      {/* Main heading section */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-6">
          Guiding your path
          <br />
          to a new home in
          <br />
          Virginia
        </h1>
      </div>

      {/* Right side content */}
      <div className="mt-8 md:mt-0 flex flex-col items-end justify-between h-full">
        <p className="text-sm text-gray-700  text-right font-bold mt-3">
          ©2025 SAHA AGENCY. ALL
          <br />
          RIGHT RESERVED
        </p>

        <Button className="cursor-pointer">
          <Link to="/listings">Explore More</Link>
        </Button>

        <p className="text-xs text-gray-600 max-w-xs text-right">
          With expert guidance and a deep understanding of Virginia's real
          estate landscape, we make your journey to a new home seamless and
          stress-free.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
