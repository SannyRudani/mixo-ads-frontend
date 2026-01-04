import { Card, Row, Col } from "antd";

export default function KPISummary({ metrics }: { metrics: any }) {
  const items = [
    { label: "Total Spend", value: `$${metrics.spend.toLocaleString()}` },
    { label: "Impressions", value: metrics.impressions.toLocaleString() },
    { label: "Clicks", value: metrics.clicks.toLocaleString() },
    { label: "Conversions", value: metrics.conversions.toLocaleString() },
  ];

  return (
    <Row gutter={16}>
      {items.map((item) => (
        <Col span={6} key={item.label}>
          <Card>
            <p style={{ color: "#64748B", marginBottom: 4 }}>{item.label}</p>
            <h2 style={{ margin: 0 }}>{item.value}</h2>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
