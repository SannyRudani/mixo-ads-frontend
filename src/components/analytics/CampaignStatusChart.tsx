import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "antd";

export default function CampaignStatusChart({ data }: { data: any }) {
  const chartData = [
    { name: "Active", value: data.active },
    { name: "Paused", value: data.paused },
    { name: "Completed", value: data.completed },
  ];

  const COLORS = ["#22C55E", "#F59E0B", "#64748B"];

  return (
    <Card title="Campaign Status Distribution">
      <ResponsiveContainer height={260}>
        <PieChart>
          <Pie data={chartData} dataKey="value" label>
            {chartData.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}
