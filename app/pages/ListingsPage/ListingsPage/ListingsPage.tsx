import { Filter, Heart, Search } from "lucide-react";
import DynamicSearchBar from "~/components/shared/DynamicSearchBar";
import PropertyCard from "~/components/shared/PropertyCard";
import { Button } from "~/components/ui/button";

const ListingsPage = () => {
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
  ];

  return (
    <div className="container mx-auto pt-1">
      <div className="">
        <div className="flex my-4 items-center border-b-[1px] border-gray-200 pb-4 gap-4">
          <div className="border border-gray-300 p-2 rounded-full cursor-pointer">
            <Filter className="text-gray-400 " />
          </div>
          <div className="border border-gray-300 p-2 rounded-full cursor-pointer">
            <Heart className="text-gray-400 " />
          </div>
          <DynamicSearchBar />
        </div>
      </div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">Discover Aruna Property</h1>
          <p className="text-gray-600 max-w-2xl">
            Whether you're looking for a modern apartment in the city or a
            peaceful home in the suburbs, our listings offer something for
            everyone.
          </p>
        </div>
        <Button variant="ghost" className="text-black hover:bg-gray-100">
          Filter Result
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
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
            } // index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ListingsPage;
