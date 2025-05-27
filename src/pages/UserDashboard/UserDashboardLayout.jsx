// // src/pages/UserDashboard/UserDashboardLayout.jsx
// import React from "react";
// import { Outlet } from "react-router-dom";
// import UserSidebar from "../../components/User/UserSidebar";

// const UserDashboardLayout = () => {
//   return (
//     <div style={{ display: "flex", height: "100%" }}>
//       <UserSidebar />
//       <div style={{ flex: 1, padding: "1rem" }}>
//         <Outlet /> {/* Dashboard pages render here */}
//       </div>
//     </div>
//   );
// };

// export default UserDashboardLayout;




import { Outlet, useNavigate } from "react-router-dom";

export default function UserDashboardLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out");
    navigate("/user/login");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-pink-50 text-pink-900 flex flex-col justify-between shadow-md">
        <div>
          <h2 className="text-2xl font-bold p-4 border-b border-pink-200">User Dashboard</h2>
          <nav className="p-4 space-y-2">
            <div onClick={() => navigate("/user/dashboard")} className="cursor-pointer hover:bg-pink-100 p-2 rounded">Dashboard</div>
            <div onClick={() => navigate("/user/dashboard/cards")} className="cursor-pointer hover:bg-pink-100 p-2 rounded">Cards</div>
            <div onClick={() => navigate("/user/dashboard/venue-search")} className="cursor-pointer hover:bg-pink-100 p-2 rounded">Venue Search</div>
            <div onClick={() => navigate("/user/dashboard/guest-list")} className="cursor-pointer hover:bg-pink-100 p-2 rounded">Guest List</div>
          </nav>
        </div>
        <div className="p-4 space-y-2">
          <div onClick={() => navigate("/user/dashboard/support")} className="cursor-pointer hover:bg-pink-100 p-2 rounded">Support</div>
          <div onClick={handleLogout} className="cursor-pointer hover:bg-rose-200 text-rose-700 p-2 rounded font-semibold">Logout</div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-50 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
