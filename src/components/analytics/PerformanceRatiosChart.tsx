import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "antd";

export default function PerformanceRatiosChart({ data }: { data: any }) {
  const chartData = [
    { name: "CTR (%)", value: data.ctr },
    { name: "CPC ($)", value: data.cpc },
    { name: "Conv. Rate (%)", value: data.conversionRate },
  ];

  return (
    <Card title="Performance Ratios">
      <ResponsiveContainer height={260}>
        <BarChart data={chartData}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="value" fill="#2563EB" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
