import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card } from "antd";
import type { CampaignInsight } from "../../types/insights.types";

export default function SpendClicksChart({
  data,
  title,
}: {
  data: CampaignInsight[];
  title: string;
}) {
  return (
    <Card title={title}>
      <ResponsiveContainer height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line dataKey="spend" stroke="#2563EB" />
          <Line dataKey="clicks" stroke="#22C55E" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
