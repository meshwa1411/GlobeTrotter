import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Transport",
    value: 25000,
  },
  {
    name: "Stay",
    value: 40000,
  },
  {
    name: "Activities",
    value: 20000,
  },
  {
    name: "Meals",
    value: 15000,
  },
];

function Budget() {
  const total = data.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <div className="page">
      <h1>Trip Budget 💰</h1>

      <div className="budget-summary">
        <div>
          <h3>Total Estimated Cost</h3>
          <h1>₹{total.toLocaleString()}</h1>
        </div>

        <div>
          <h3>Average Per Day</h3>
          <h1>₹6,250</h1>
        </div>
      </div>

      <div className="chart-card">
        <h2>Cost Breakdown</h2>

        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} />
              ))}
            </Pie>

            <Tooltip />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="cost-list">
        {data.map((item) => (
          <div key={item.name}>
            <span>{item.name}</span>
            <strong>
              ₹{item.value.toLocaleString()}
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Budget;