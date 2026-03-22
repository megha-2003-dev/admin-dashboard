function DashboardCard({ title, value, icon }) {
  return (
    <div className="bg-white p-5 rounded shadow flex items-center gap-4">
      <div className="text-blue-500 text-3xl">
        {icon}
      </div>

      <div>
        <h3 className="text-gray-500">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}

export default DashboardCard;