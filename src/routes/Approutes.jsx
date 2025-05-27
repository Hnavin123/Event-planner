// // src/routes/AppRoutes.jsx
// import { Routes, Route } from "react-router-dom";

// import Layout from "../Components/common/Layout";
// import HomePage from "../pages/Home/HomePage";
// import UserLogin from "../pages/Auth/UserLogin";

// import UserDashboardLayout from "../pages/UserDashboard/UserDashboardLayout";
// import UserHome from "../pages/UserDashboard/UserHome";
// import CreateEvent from "../pages/User/CreateEvent";
// import MyEvents from "../pages/User/MyEvents";
// import PlannerLogin from "../pages/Auth/PlannerLogin";
// import Planners from "../pages/Directory/Planners";
// import Contact from "../pages/Contact/Contact";
// import VendorSearch from "../pages/Directory/VendorSearch";
// import GenerateInvitations from "../pages/User/GenerateInvitations";

// export default function AppRoutes() {
//   return (
//     <Routes>
//       {/* Wrap everything in global Layout */}
//       <Route path="/" element={<Layout />}>
//         {/* Public routes */}
//         <Route index element={<HomePage />} />
//         <Route path="user/login" element={<UserLogin />} />

//         {/* Dashboard routes nested inside dashboard layout */}
//         <Route path="user/dashboard" element={<UserDashboardLayout />}>
//           <Route index element={<UserHome />} />
//           <Route path="create-event" element={<CreateEvent />} />
//           <Route path="events" element={<MyEvents />} />
//         </Route>
//         <Route path="planner/login" element={<PlannerLogin />} />
//         <Route path="planner-directory" element={<Planners />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="/vendor-search" element={<VendorSearch />} />
//         <Route path="/generate-invitations" element={<GenerateInvitations />} />
//       </Route>
//     </Routes>
//   );
// }









import { Routes, Route } from "react-router-dom";

import Layout from "../Components/common/Layout";
import HomePage from "../pages/Home/HomePage";
import UserLogin from "../pages/Auth/UserLogin";
import PlannerLogin from "../pages/Auth/PlannerLogin";

import Contact from "../pages/Contact/Contact";
import Planners from "../pages/Directory/Planners";
import VendorSearch from "../pages/Directory/VendorSearch";
import GenerateInvitations from "../pages/User/GenerateInvitations";

// User Dashboard Pages and Layout
import UserDashboardLayout from "../pages/UserDashboard/UserDashboardLayout";
import UserHome from "../pages/UserDashboard/UserHome";
import CreateEvent from "../pages/User/CreateEvent";
import MyEvents from "../pages/User/MyEvents";

// Dummy pages or real ones (create them as needed)
// import Cards from "../pages/UserDashboard/Cards";
// import GuestList from "../pages/UserDashboard/GuestList";
// import Support from "../pages/UserDashboard/Support";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Global Layout */}
      <Route path="/" element={<Layout />}>
        {/* Public routes */}
        <Route index element={<HomePage />} />
        <Route path="user/login" element={<UserLogin />} />
        <Route path="planner/login" element={<PlannerLogin />} />
        <Route path="contact" element={<Contact />} />
        <Route path="planner-directory" element={<Planners />} />
        <Route path="vendor-search" element={<VendorSearch />} />
        <Route path="generate-invitations" element={<GenerateInvitations />} />

        {/* User Dashboard (protected) */}
        <Route path="user/dashboard" element={<UserDashboardLayout />}>
          <Route index element={<UserHome />} />
          {/* <Route path="create-event" element={<CreateEvent />} />
          <Route path="events" element={<MyEvents />} />
          <Route path="cards" element={<Cards />} />
          <Route path="venue-search" element={<VendorSearch />} />
          <Route path="guest-list" element={<GuestList />} />
          <Route path="support" element={<Support />} /> */}
        </Route>
      </Route>
    </Routes>
  );
}
