import { Row, Col, Card, Skeleton } from "antd";

export default function DashboardSkeleton() {
  return (
    <>
      <Row gutter={16}>
        {[1, 2, 3, 4].map((i) => (
          <Col span={6} key={i}>
            <Card>
              <Skeleton active paragraph={false} />
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={12}>
          <Card>
            <Skeleton active paragraph={{ rows: 6 }} />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Skeleton active paragraph={{ rows: 6 }} />
          </Card>
        </Col>
      </Row>
    </>
  );
}
