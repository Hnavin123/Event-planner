import { useNavigate } from "react-router-dom";

const UserSidebar = () => {
  const navigate = useNavigate();

  const navItems = [
    { label: "Dashboard", path: "/user/dashboard" },
    { label: "My Events", path: "/user/dashboard/events" },
    { label: "Create Event", path: "/user/dashboard/create-event" },
    { label: "Checklist", path: "/user/dashboard/checklist" },
    { label: "Budget Assistant", path: "/user/dashboard/budget" },
    { label: "Invitation", path: "/user/dashboard/invitation" },
    { label: "Notes", path: "/user/dashboard/notes" },
    { label: "Find Planners", path: "/user/dashboard/find-planners" },
  ];

  return (
    <div className="w-64 min-h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">User Dashboard</h2>
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li
            key={item.label}
            onClick={() => navigate(item.path)}
            className="cursor-pointer hover:text-blue-400"
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserSidebar;
