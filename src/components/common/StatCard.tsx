import { Card } from "antd";

export default function StatCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <Card>
      <p style={{ color: "#64748B", marginBottom: 8 }}>{title}</p>
      <h2 style={{ margin: 0 }}>{value}</h2>
    </Card>
  );
}
