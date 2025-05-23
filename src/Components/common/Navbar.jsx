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



// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   return (
//     <nav className="bg-blue-500 text-white px-6 py-4 flex justify-between items-center shadow-md">
//       <h1 className="text-2xl font-bold">Event Planner</h1>
//       {/* This div will contain the links */}
//       <div className="flex justify-center space-x-8 w-full">
//         <Link to="/" className="hover:text-blue-300">Home</Link>
//         <Link to="/user/login" className="hover:text-blue-300">User Login</Link>
//         <Link to="/planner/login" className="hover:text-blue-300">Planner Login</Link>
//         <Link to="/planner-directory" className="hover:text-blue-300">Planners</Link>
//         <Link to="/contact" className="hover:text-blue-300">Contact</Link>
//       </div>
//     </nav>
//   );
// }
