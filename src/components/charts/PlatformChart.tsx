import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "antd";

function PlatformChart({ campaigns }: any) {
  const platformCount: Record<string, number> = {};

  campaigns.forEach((c: any) => {
    c.platforms?.forEach((p: string) => {
      platformCount[p] = (platformCount[p] || 0) + 1;
    });
  });

  const data = Object.entries(platformCount).map(([key, value]) => ({
    platform: key.toUpperCase(),
    campaigns: value,
  }));

  return (
    <Card title="Platforms Distribution">
      <ResponsiveContainer height={300}>
        <BarChart data={data}>
          <XAxis dataKey="platform" />
          <Tooltip />
          <Bar dataKey="campaigns" fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}

export default PlatformChart;
