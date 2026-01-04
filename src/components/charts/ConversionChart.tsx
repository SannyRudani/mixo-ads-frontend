import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "antd";
import type { CampaignInsight } from "../../types/insights.types";

export default function ConversionsChart({
  data,
}: {
  data: CampaignInsight[];
}) {
  return (
    <Card title="Conversions">
      <ResponsiveContainer height={300}>
        <BarChart data={data}>
          <XAxis dataKey="date" />
          <Tooltip />
          <Bar dataKey="conversions" fill="#F59E0B" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
