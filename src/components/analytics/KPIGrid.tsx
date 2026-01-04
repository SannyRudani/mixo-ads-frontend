import { Row, Col, Card } from "antd";

export default function KPIGrid({ metrics }: { metrics: any }) {
  console.log(metrics);
  return (
    <Row gutter={16}>
      {Object?.entries(metrics).map(([key, value]) => (
        <Col span={6} key={key}>
          <Card>
            <p style={{ color: "#64748B" }}>{key.toUpperCase()}</p>
            <h2>{value as number}</h2>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
