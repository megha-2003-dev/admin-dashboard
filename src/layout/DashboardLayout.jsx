import { Outlet, NavLink } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="min-h-screen flex">

      {/* Sidebar */}
      <div className="w-64 bg-blue-800 p-5 text-white">

        <h2 className="text-xl font-bold mb-6">
          Admin Dashboard
        </h2>

        <ul className="space-y-2">

          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block p-2 rounded ${
                  isActive ? "bg-blue-600" : "hover:bg-blue-700"
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/users"
              className={({ isActive }) =>
                `block p-2 rounded ${
                  isActive ? "bg-blue-600" : "hover:bg-blue-700"
                }`
              }
            >
              Users
            </NavLink>
          </li>

        </ul>

      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <div className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">
            Admin Panel
          </h1>

          <div className="flex items-center gap-3">
            <span className="text-gray-600">Admin</span>

            <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full">
              A
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="bg-gray-100 flex-1 p-6">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default DashboardLayout;