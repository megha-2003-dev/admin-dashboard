import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { name: "Jan", users: 30 },
  { name: "Feb", users: 45 },
  { name: "Mar", users: 60 },
  { name: "Apr", users: 50 },
  { name: "May", users: 80 },
];

function Chart(){
    return(
        <div className="bg-white p-5 rounded shadow">
            <h2 className="text-black mb-4 font-bold">User Growth</h2>
            <LineChart width={400} height={250} data={data}>
                <CartesianGrid stroke="#ccc"/>
                <XAxis dataKey= "name"/>
                <YAxis/>
                <Tooltip/>
                <Line type="monotone" dataKey="users" stroke="#3b82f6"/>
            </LineChart>

        </div>
    )
}
export default Chart;