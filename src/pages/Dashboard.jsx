import { FaUsers, FaGithub, FaCodeBranch } from "react-icons/fa";
import DashboardCard from "../components/DashboardCard";
import Chart from "../components/Chart";
import { useUsers } from "../hooks/useUsers";

function Dashboard() {
  // ✅ Using custom hook instead of direct axios call
  const { users, loading, error } = useUsers();

  return (
    <div className="p-4">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 p-4">
        <DashboardCard
          title="Total Users"
          value={loading ? "..." : users.length}
          icon={<FaUsers />}
        />
        <DashboardCard
          title="GitHub Profiles"
          value={loading ? "..." : users.filter(u => u.type === "User").length}
          icon={<FaGithub />}
        />
        <DashboardCard
          title="Organizations"
          value={loading ? "..." : users.filter(u => u.type === "Organization").length}
          icon={<FaCodeBranch />}
        />
      </div>

      {/* Error state */}
      {error && (
        <div className="mx-4 p-4 bg-red-50 border border-red-200 rounded text-red-600 text-sm">
          {error}
        </div>
      )}

      {/* Chart */}
      <div className="mt-6 px-4">
        <Chart users={users} />
      </div>
    </div>
  );
}

export default Dashboard;
