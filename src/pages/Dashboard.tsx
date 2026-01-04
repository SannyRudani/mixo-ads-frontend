import PageHeader from "../components/common/PageHeader";
import { useCampaignInsights } from "../hooks/useCampaignInsights";
import KPISummary from "../components/analytics/KPISummary";
import CampaignStatusChart from "../components/analytics/CampaignStatusChart";
import PerformanceRatiosChart from "../components/analytics/PerformanceRatiosChart";
import { mapInsightSummary } from "../utils/insightMapper";
import { Row, Col } from "antd";
import Topbar from "../components/layout/Topbar";
import Loader from "../components/common/Loader";

export default function Dashboard() {
  const { data, loading } = useCampaignInsights();

  if (loading || !data)
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Loader />
      </div>
    );

  const summary = mapInsightSummary(data);

  return (
    <>
      <Topbar pageTitle="Dashboard" />
      <KPISummary metrics={summary.metrics} />

      <Row gutter={16} style={{ marginTop: 24 }}>
        <Col span={12}>
          <CampaignStatusChart data={summary.campaigns} />
        </Col>
        <Col span={12}>
          <PerformanceRatiosChart data={summary.averages} />
        </Col>
      </Row>
    </>
  );
}
