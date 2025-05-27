import React from "react";
import { Outlet } from "react-router-dom";
import UserSidebar from "../../Components/user/UserSidebar";

const UserDashboardLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <UserSidebar />
      <div style={{ flex: 1, padding: "1rem" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboardLayout;
