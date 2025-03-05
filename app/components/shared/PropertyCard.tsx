import React from "react";
import { MapPin, BedDouble, Bath, Square } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";

interface PropertyCardProps {
  name: string;
  location: string;
  beds: number;
  baths: number;
  area: string | number;
  image: string;
  onDetailsClick: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  name,
  location,
  beds,
  baths,
  area,
  image,
  onDetailsClick,
}) => {
  return (
    <div className="overflow-hidden group flex flex-col h-80">
      <div className="relative overflow-hidden flex-grow">
        <div className="relative ">
          <img
            src={image}
            alt={name}
            className="w-full  object-cover transition-transform duration-300 group-hover:scale-105 rounded-md"
          />
          <Button className="group-hover:opacity-80  opacity-0 absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900/90 hover:bg-gray-800 text-white rounded-full w-24 h-24 cursor-pointer">
            <Link to="/listings">Details</Link>
          </Button>
        </div>
      </div>

      <div className="pb-4 pt-0 px-1 mt-auto">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-lg">{name}</h3>
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin size={14} className="mr-1" />
            <span>{location}</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="flex items-center text-gray-600">
            <BedDouble size={16} className="mr-1" />
            <span>{beds}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Bath size={16} className="mr-1" />
            <span>{baths}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Square size={16} className="mr-1" />
            <span>{area}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
