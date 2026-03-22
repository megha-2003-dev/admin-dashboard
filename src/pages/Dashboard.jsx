import { FaShoppingCart, FaUsers } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa6";
import DashboardCard from "../components/DashboardCard";
import Chart from "../components/Chart";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => setUsers(res.data));
  }, []);
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-5 p-4">
        <DashboardCard
          title="Total Users"
          value={users.length}
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
      <div className="mt-6">
        <Chart/>
      </div>
    </div>
  );
}

export default Dashboard;