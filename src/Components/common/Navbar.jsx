import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Event Planner</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/user/login">User Login</Link>
        <Link to="/planner/login">Planner Login</Link>
        <Link to="/planner-directory">Planners</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
