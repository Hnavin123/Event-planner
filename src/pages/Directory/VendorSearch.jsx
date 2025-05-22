
import React, { useState } from "react";

const dummyVendors = [
  {
    id: 1,
    name: "Elegant Events",
    city: "Delhi",
    rating: 4.8,
    price: "₹40,000 - ₹1,20,000",
    image: "https://source.unsplash.com/300x200/?wedding,decor",
  },
  {
    id: 2,
    name: "Royal Weddings",
    city: "Mumbai",
    rating: 4.5,
    price: "₹60,000 - ₹2,00,000",
    image: "https://source.unsplash.com/300x200/?wedding,stage",
  },
  {
    id: 3,
    name: "Floral Touch",
    city: "Delhi",
    rating: 4.7,
    price: "₹25,000 - ₹70,000",
    image: "https://source.unsplash.com/300x200/?flowers,decoration",
  },
];

const VendorSearch = () => {
  const [searchCity, setSearchCity] = useState("");
  const [filteredVendors, setFilteredVendors] = useState([]);

  const handleSearch = (e) => {
    const city = e.target.value;
    setSearchCity(city);
    const results = dummyVendors.filter(vendor =>
      vendor.city.toLowerCase().includes(city.toLowerCase())
    );
    setFilteredVendors(results);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Search Vendors by City</h2>
      <input
        type="text"
        placeholder="Enter city name..."
        value={searchCity}
        onChange={handleSearch}
        className="w-full p-3 border border-gray-300 rounded-md mb-6"
      />
      {filteredVendors.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredVendors.map(vendor => (
            <div key={vendor.id} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={vendor.image}
                alt={vendor.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600">{vendor.name}</h3>
              <p className="text-gray-600">City: {vendor.city}</p>
              <p className="text-gray-600">Rating: ⭐ {vendor.rating}</p>
              <p className="text-gray-600">Price: {vendor.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No vendors found for this city.</p>
      )}
    </div>
  );
};

export default VendorSearch;
