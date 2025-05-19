
// import Navbar from "../../Components/common/Navbar";
import Navbar from "../../Components/common/Navbar.jsx";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Event Planner</h1>
        <p className="text-lg text-gray-700 max-w-md">
          Simplify your event planning with powerful tools tailored for users and planners.
        </p>
      </section>
    </div>
  );
}
