import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "antd";

export default function CampaignPerformanceTrend({ data }: { data: any[] }) {
  if (!data || data.length === 0) {
    return (
      <Card title="Performance Trend">
        <p style={{ color: "#64748B" }}>
          No historical data available for this campaign.
        </p>
      </Card>
    );
  }

  return (
    <Card title="Performance Trend">
      <ResponsiveContainer height={320}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <Tooltip />
          <Line dataKey="impressions" stroke="#2563EB" strokeWidth={2} />
          <Line dataKey="clicks" stroke="#22C55E" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
