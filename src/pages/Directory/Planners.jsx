
// src/pages/PlannerDirectory/Planners.jsx
import React from "react";

const dummyPlanners = [
  {
    id: 1,
    name: "Elegant Events",
    location: "Delhi",
    rating: 4.7,
    services: ["Weddings", "Corporate Events", "Birthday Parties"]
  },
  {
    id: 2,
    name: "Celebrations Co.",
    location: "Mumbai",
    rating: 4.5,
    services: ["Weddings", "Anniversaries"]
  },
  {
    id: 3,
    name: "Star Plannerz",
    location: "Bangalore",
    rating: 4.9,
    services: ["Corporate Events", "Product Launches"]
  }
];

export default function Planners() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Top Event Planners</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyPlanners.map((planner) => (
          <div
            key={planner.id}
            className="border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold">{planner.name}</h3>
            <p className="text-gray-600">📍 {planner.location}</p>
            <p className="text-yellow-600">⭐ {planner.rating}</p>
            <ul className="mt-2 text-sm text-gray-700 list-disc pl-5">
              {planner.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
