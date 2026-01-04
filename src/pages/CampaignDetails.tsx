import { useParams } from "react-router-dom";
import { useCampaignInsight } from "../hooks/useCampaignInsight";
import { mapCampaignInsight } from "../utils/mapCampaignInsight";
import CampaignHeader from "../components/analytics/CampaignHeader";
import CampaignPrimaryKPIs from "../components/analytics/CampaignPrimaryKPIs";
import CampaignSecondaryMetrics from "../components/analytics/CampaignSecondaryMetrics";
import CampaignPerformanceTrend from "../components/analytics/CampaignPerformanceTrend";
import Loader from "../components/common/Loader";

export default function CampaignDetails() {
  const { id } = useParams();
  const { data, loading } = useCampaignInsight(id!);

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

  const insight = mapCampaignInsight(data);

  return (
    <>
      <CampaignHeader id={insight.id} timestamp={insight.timestamp} />

      <CampaignPrimaryKPIs data={insight.primary} />

      <div style={{ marginTop: 24 }}>
        <CampaignSecondaryMetrics data={insight.secondary} />
      </div>

      <div style={{ marginTop: 24 }}>
        <CampaignPerformanceTrend data={insight.timeline} />
      </div>
    </>
  );
}
