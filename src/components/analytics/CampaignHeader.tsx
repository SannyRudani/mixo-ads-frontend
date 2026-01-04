import { Card } from "antd";
import Topbar from "../layout/Topbar";

export default function CampaignHeader({
  id,
  timestamp,
}: {
  id: string;
  timestamp: string;
}) {
  return (
    <Card style={{ marginBottom: 16 }}>
      <Topbar
        pageTitle={"Campaign Details"}
        subTitle={`Campaign ID: ${id} · Last Updated: ${timestamp}`}
      />
      {/* <h2 style={{ marginBottom: 4 }}>Campaign Analytics</h2> */}
    </Card>
  );
}
