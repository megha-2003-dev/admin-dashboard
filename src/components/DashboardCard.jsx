function DashboardCard({ title, value, icon }) {
  return (
    <div className="bg-white p-5 rounded shadow flex items-center gap-4 hover:shadow-md transition-shadow">
      <div className="text-blue-500 text-3xl bg-blue-50 p-3 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

export default DashboardCard;
