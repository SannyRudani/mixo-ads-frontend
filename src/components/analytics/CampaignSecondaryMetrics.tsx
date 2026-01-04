import { Card, Row, Col } from "antd";

export default function CampaignSecondaryMetrics({ data }: { data: any }) {
  const items = [
    { label: "CTR (%)", value: data.ctr },
    { label: "CPC ($)", value: data.cpc },
    { label: "Conversion Rate (%)", value: data.conversionRate },
  ];

  return (
    <Row gutter={16}>
      {items.map((item) => (
        <Col span={8} key={item.label}>
          <Card>
            <p style={{ color: "#64748B", marginBottom: 4 }}>{item.label}</p>
            <h2 style={{ margin: 0 }}>{item.value}</h2>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
