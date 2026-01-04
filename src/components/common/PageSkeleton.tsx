import { Skeleton, Card } from "antd";

export default function PageSkeleton() {
  return (
    <Card>
      <Skeleton active paragraph={{ rows: 10 }} />
    </Card>
  );
}
