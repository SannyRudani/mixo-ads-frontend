import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "antd";

export default function PerformanceTrendChart({ data }: { data: any[] }) {
  return (
    <Card title="Performance Trend">
      <ResponsiveContainer height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="impressions"
            stroke="#2563EB"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="clicks"
            stroke="#22C55E"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
