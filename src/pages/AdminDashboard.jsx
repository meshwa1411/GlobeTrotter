import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    city: "Paris",
    trips: 120,
  },
  {
    city: "Dubai",
    trips: 95,
  },
  {
    city: "Goa",
    trips: 90,
  },
  {
    city: "Tokyo",
    trips: 75,
  },
];

function AdminDashboard() {
  return (
    <div className="page">
      <h1>Admin Dashboard 📊</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <h1>1,250</h1>
        </div>

        <div className="stat-card">
          <h3>Total Trips</h3>
          <h1>3,420</h1>
        </div>

        <div className="stat-card">
          <h3>Public Trips</h3>
          <h1>1,850</h1>
        </div>

        <div className="stat-card">
          <h3>Activities</h3>
          <h1>7,500</h1>
        </div>
      </div>

      <div className="chart-card">
        <h2>Popular Cities</h2>

        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="city" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="trips" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AdminDashboard;