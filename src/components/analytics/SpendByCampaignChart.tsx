import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "antd";

export default function SpendByCampaignChart({ data }: { data: any[] }) {
  return (
    <Card title="Spend by Campaign">
      <ResponsiveContainer height={300}>
        <BarChart data={data}>
          <XAxis dataKey="campaign_name" />
          <Tooltip />
          <Bar dataKey="spend" fill="#2563EB" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
