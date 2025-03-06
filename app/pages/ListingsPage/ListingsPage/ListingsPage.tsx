import { useState } from "react";
import { Filter, Heart, Search, X } from "lucide-react";
import DynamicSearchBar from "~/components/shared/DynamicSearchBar";
import PropertyCard from "~/components/shared/PropertyCard";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { Slider } from "~/components/ui/slider";

const ListingsPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const properties = [
    {
      id: 1,
      name: "Griya Asri Tamansari",
      location: "Bogor Tengah",
      beds: 4,
      baths: 2.5,
      area: 410,
      image: "https://i.ibb.co.com/LDfhVHzs/real-1.jpg",
    },
    {
      id: 2,
      name: "Arjuna Hills Estate",
      location: "Gunungkidul, Yogyakarta",
      beds: 4,
      baths: 2.5,
      area: "410 m²",
      image: "https://i.ibb.co.com/LDfhVHzs/real-1.jpg",
    },
    {
      id: 3,
      name: "Nirwana Residence",
      location: "Semarang Selatan",
      beds: 4,
      baths: 2.5,
      area: "410 m²",
      image: "https://i.ibb.co.com/LDfhVHzs/real-1.jpg",
    },
    {
      id: 4,
      name: "Serenity Heights",
      location: "Malang Barat",
      beds: 4,
      baths: 2.5,
      area: "410 m²",
      image: "https://i.ibb.co.com/LDfhVHzs/real-1.jpg",
    },
    {
      id: 5,
      name: "Taman Asri Estate",
      location: "Jakarta Selatan",
      beds: 4,
      baths: 2.5,
      area: "410 m²",
      image: "https://i.ibb.co.com/LDfhVHzs/real-1.jpg",
    },
    {
      id: 6,
      name: "Sentosa Hills",
      location: "Surabaya Timur",
      beds: 4,
      baths: 2.5,
      area: "410 m²",
      image: "https://i.ibb.co.com/LDfhVHzs/real-1.jpg",
    },
    {
      id: 7,
      name: "Nirwana Residence",
      location: "Semarang Selatan",
      beds: 4,
      baths: 2.5,
      area: "410 m²",
      image: "https://i.ibb.co.com/LDfhVHzs/real-1.jpg",
    },
    {
      id: 8,
      name: "Serenity Heights",
      location: "Malang Barat",
      beds: 4,
      baths: 2.5,
      area: "410 m²",
      image: "https://i.ibb.co.com/LDfhVHzs/real-1.jpg",
    },
    {
      id: 9,
      name: "Taman Asri Estate",
      location: "Jakarta Selatan",
      beds: 4,
      baths: 2.5,
      area: "410 m²",
      image: "https://i.ibb.co.com/LDfhVHzs/real-1.jpg",
    },
    {
      id: 10,
      name: "Sentosa Hills",
      location: "Surabaya Timur",
      beds: 4,
      baths: 2.5,
      area: "410 m²",
      image: "https://i.ibb.co.com/LDfhVHzs/real-1.jpg",
    },
  ];

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="container mx-auto pt-1">
      <div className="flex relative">
        {/* Fixed Sidebar with stable scrollbar - positioned below navbar */}
        <div
          className={`transition-all duration-300 ease-in-out fixed top-16 bottom-0 left-0 z-10 ${
            isFilterOpen
              ? "w-72 opacity-100 translate-x-0"
              : "w-0 opacity-0 -translate-x-full"
          } bg-white border-r overflow-hidden`}
          style={{
            marginLeft: isFilterOpen ? "calc((100% - 1280px) / 2 + 5px)" : "0",
            maxWidth: "50rem",
          }}
        >
          {/* Stable scrollbar container - always reserves space for scrollbar */}
          <div
            className="h-full overflow-y-scroll pr-2 scrollbar-container"
            style={{
              paddingRight: "18px", // Add extra padding to compensate for scrollbar width
              marginRight: "-10px", // Negative margin to prevent content shift
              boxSizing: "content-box", // Ensure padding doesn't affect width calculation
            }}
          >
            {isFilterOpen && <FilterSidebar onClose={toggleFilter} />}
          </div>
        </div>

        {/* Property Grid - adjusts columns based on sidebar state */}
        <div
          className="flex-1 transition-all duration-300"
          style={{
            marginLeft: isFilterOpen ? "288px" : "0",
          }}
        >
          {/* search and filter tab */}
          <div
            className={`flex my-4 items-center border-b-[1px] border-gray-200 pb-4 gap-4 ${
              isFilterOpen ? "pl-4" : "pl-0"
            }`}
          >
            {isFilterOpen || (
              <div
                className="border border-gray-300 p-2 rounded-full cursor-pointer hover:border-gray-400 transition-all duration-200"
                onClick={toggleFilter}
              >
                <Filter className="text-gray-400" />
              </div>
            )}
            <div className="border border-gray-300 p-2 rounded-full cursor-pointer">
              <Heart className="text-gray-400" />
            </div>
            <DynamicSearchBar />
          </div>

          <div
            className={`flex justify-between items-center mb-8 ${
              isFilterOpen ? "pl-4" : "pl-0"
            }`}
          >
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Discover Aruna Property
              </h1>
              <p className="text-gray-600 max-w-2xl">
                Whether you're looking for a modern apartment in the city or a
                peaceful home in the suburbs, our listings offer something for
                everyone.
              </p>
            </div>
            <Button
              variant="ghost"
              className="text-black hover:bg-gray-100"
              onClick={toggleFilter}
            >
              Filter Result
            </Button>
          </div>
          <div
            className={`${
              isFilterOpen ? "pl-4" : "pl-0"
            } grid grid-cols-2 transition-all duration-300 md:grid-cols-${
              isFilterOpen ? "2" : "3"
            } lg:grid-cols-${isFilterOpen ? "2" : "3"} gap-6`}
          >
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                name={property.name}
                location={property.location}
                beds={property.beds}
                baths={property.baths}
                area={property.area}
                image={property.image}
                onDetailsClick={() =>
                  console.log(`Property ${property.id} details clicked`)
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Add global styles for custom scrollbar */}
      <style jsx global>{`
        .scrollbar-container::-webkit-scrollbar {
          width: 8px;
          background: transparent;
        }

        .scrollbar-container::-webkit-scrollbar-track {
          background: transparent;
        }

        .scrollbar-container::-webkit-scrollbar-thumb {
          background: transparent;
          border-radius: 4px;
        }

        .scrollbar-container:hover::-webkit-scrollbar-thumb {
          background: #c1c1c1;
        }

        .scrollbar-container:hover::-webkit-scrollbar-thumb:hover {
          background: #a1a1a1;
        }
      `}</style>
    </div>
  );
};

// FilterSidebar Component
const FilterSidebar = ({ onClose }) => {
  const [priceRange, setPriceRange] = useState([500, 2500]);

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  return (
    <div className="py-6 pr-6 h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Filter</h2>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={priceRange}
            min={0}
            max={5000}
            step={100}
            onValueChange={handlePriceChange}
            className="mb-4"
          />
          <div className="flex justify-between">
            <span className="text-gray-600">${priceRange[0]}k</span>
            <span className="text-gray-600">${priceRange[1]}k</span>
          </div>
        </div>
      </div>

      {/* Property Type */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Property Type</h3>
        <div className="space-y-3">
          <FilterCheckbox label="House" />
          <FilterCheckbox label="Apartment" />
          <FilterCheckbox label="Villa" />
          <FilterCheckbox label="Townhouse" />
          <FilterCheckbox label="Land" />
        </div>
      </div>

      {/* Bedrooms */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Bedrooms</h3>
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
            >
              {num}
            </button>
          ))}
          <button className="h-10 px-3 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
            5+
          </button>
        </div>
      </div>

      {/* Bathrooms */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Bathrooms</h3>
        <div className="flex space-x-2">
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              className="h-10 w-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
            >
              {num}
            </button>
          ))}
          <button className="h-10 px-3 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors duration-200">
            4+
          </button>
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Amenities</h3>
        <div className="space-y-3">
          <FilterCheckbox label="Swimming Pool" />
          <FilterCheckbox label="Garden" />
          <FilterCheckbox label="Garage" />
          <FilterCheckbox label="Air Conditioning" />
          <FilterCheckbox label="Gym" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 mt-8">
        <Button
          variant="outline"
          className="flex-1 transition-colors duration-200"
        >
          Reset
        </Button>
        <Button className="flex-1 bg-black hover:bg-gray-800 text-white transition-colors duration-200">
          Apply
        </Button>
      </div>
    </div>
  );
};

// Helper Components
const FilterCheckbox = ({ label }) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={label} />
      <label htmlFor={label} className="text-gray-700 cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default ListingsPage;
