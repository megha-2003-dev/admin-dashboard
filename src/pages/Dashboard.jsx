import { FaShoppingCart, FaUsers } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-5 p-4">
      <DashboardCard
        title="Total Users"
        value="10"
        icon={<FaUsers />}
      />

      <DashboardCard
        title="Orders"
        value="45"
        icon={<FaShoppingCart />}
      />

      <DashboardCard
        title="Revenue"
        value="$24k"
        icon={<FaDollarSign />}
      />
    </div>
  );
}

export default Dashboard;