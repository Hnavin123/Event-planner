import React from "react";
import { Link } from "react-router-dom";
import ScheduleDemoFeature from "../../Components/ui/ScheduleDemoFeature";

const HomePage = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-100 via-white to-blue-100 py-20 px-6 text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">
          Plan Your Dream Event Effortlessly
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Discover vendors, manage guests, and create unforgettable memories
          with EventPlanner.
        </p>
        <Link to="/user/login">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section
        className="py-20 px-6 bg-gradient-to-b from-blue-50 via-white to-pink-50"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/cubes.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      >
        <div className="max-w-3xl mx-auto space-y-16">
          <div className="flex flex-col items-center bg-white bg-opacity-90 rounded-xl p-8 shadow-lg">
            <div className="text-center max-w-xl">
              <h3 className="text-3xl font-bold text-blue-700 mb-4 tracking-wide">
                How It Works
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Talk to Event Planner to generate invitations, find vendors, and
                manage your budget seamlessly.
              </p>
              <div className="flex justify-center">
                <ScheduleDemoFeature />
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row items-center bg-white bg-opacity-90 rounded-xl p-8 shadow-lg">
            <img
              src="https://source.unsplash.com/400x250/?vendors,event"
              alt="Vendor Search"
              className="rounded-lg shadow-md mb-6 md:mb-0 md:mr-8 flex-shrink-0 w-full md:w-1/2 object-cover"
            />
            <div>
              <h3 className="text-3xl font-bold text-blue-700 mb-4 tracking-wide">
                <Link to="/vendor-search" className="hover:underline">
                  Vendor Search
                </Link>
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Easily browse and connect with top-rated vendors, ensuring your
                vision comes to life with the best professionals.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center bg-white bg-opacity-90 rounded-xl p-8 shadow-lg">
            <img
              src="https://source.unsplash.com/400x250/?invitation,design"
              alt="Generate Invitations"
              className="rounded-lg shadow-md mb-6 md:mb-0 md:mr-8 flex-shrink-0 w-full md:w-1/2 object-cover"
            />
            <div>
              <h3 className="text-3xl font-bold text-blue-700 mb-4 tracking-wide">
                <Link to="/generate-invitations" className="hover:underline">
                  Generate Invitations
                </Link>
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Craft stunning digital invitations and manage RSVPs easily to
                keep your event organized and guests informed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-4">
          Ready to Start Planning?
        </h2>
        <p className="text-gray-700 mb-6">
          Join EventPlanner today and make your event unforgettable.
        </p>
        <Link to="/user/login">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300">
            Sign Up Now
          </button>
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
