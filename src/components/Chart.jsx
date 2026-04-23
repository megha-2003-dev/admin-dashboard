import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, Legend
} from "recharts";

// ✅ Chart now uses real data passed from parent instead of hardcoded values
function Chart({ users = [] }) {

    // Group users by first letter of username — shows real distribution
    const chartData = "abcdefghijklmnopqrstuvwxyz"
        .split("")
        .map((letter) => ({
            letter: letter.toUpperCase(),
            count: users.filter((u) =>
                u.login?.toLowerCase().startsWith(letter)
            ).length,
        }))
        .filter((d) => d.count > 0); // only show letters that have users

    if (users.length === 0) {
        return (
            <div className="bg-white p-5 rounded shadow flex items-center justify-center h-48 text-gray-400">
                Loading chart data...
            </div>
        );
    }

    return (
        <div className="bg-white p-5 rounded shadow">
            <h2 className="text-gray-700 mb-4 font-bold">
                Users by Username Initial
            </h2>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="letter" tick={{ fontSize: 12 }} />
                    <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" name="Users" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
