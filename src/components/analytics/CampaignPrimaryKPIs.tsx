import { Card, Row, Col } from "antd";

export default function CampaignPrimaryKPIs({ data }: { data: any }) {
  const items = [
    { label: "Spend", value: `$${data.spend}` },
    { label: "Impressions", value: data.impressions },
    { label: "Clicks", value: data.clicks },
    { label: "Conversions", value: data.conversions },
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
