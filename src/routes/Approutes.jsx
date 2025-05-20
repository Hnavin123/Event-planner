// import React from 'react'
// import { Route,Routes } from 'react-router-dom'
// import HomePage from '../pages/Home/HomePage'

// function Approutes() {
//   return (
//     <>
//         <div>Approutes</div>
//         <Routes>
//             <Route path="/" element={<HomePage />} />
//         </Routes>

//     </>
    
//   )
// }

// export default Approutes


import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import UserLogin from "../pages/Auth/UserLogin";
import UserDashboard from "../pages/UserDashboard/UserDashboardLayout.jsx";
import CreateEvent from "../pages/User/CreateEvent.jsx";
import MyEvents from "../pages/User/MyEvents.jsx";
import UserDashboardLayout from "../pages/UserDashboard/UserDashboardLayout.jsx";
//import PlannerLogin from "../pages/Auth/PlannerLogin";
// Add other components as we go

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/user/login" element={<UserLogin />} />
      {/* <Route path="/user/dashboard" element={<UserDashboard />} /> */}
      <Route path="/user/dashboard/create-event" element={<CreateEvent />} />
      <Route path="/user/dashboard/events" element={<MyEvents />} />
      <Route path="/user/dashboard" element={<UserDashboardLayout />}/>
      <Route index element={<UserDashboard />} />
      {/* <Route path="/planner/login" element={<PlannerLogin />} /> */}
    </Routes>
  );
}
