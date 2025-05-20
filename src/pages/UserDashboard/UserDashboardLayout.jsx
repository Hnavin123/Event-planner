// 

// src/pages/User/UserDashboardLayout.jsx

// import UserSidebar from "../../components/user/UserSidebar";
// import { Outlet } from "react-router-dom";

// const UserDashboardLayout = () => {
//   return (
//     <div className="flex h-screen">
//       <UserSidebar />
//       <main className="flex-1 p-6 bg-gray-100 min-h-screen">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default UserDashboardLayout;



const UserDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Welcome to your dashboard!</h1>
      <p>Select an option from the sidebar to get started.</p>
    </div>
  );
};

export default UserDashboard;
