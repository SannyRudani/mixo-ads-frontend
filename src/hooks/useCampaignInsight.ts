import { useEffect, useState } from "react";
import { fetchCampaignInsightById } from "../api/insights.api";

export const useCampaignInsight = (id: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCampaignInsightById(id)
      .then(setData)
      .finally(() => setLoading(false));
  }, [id]);

  return { data, loading };
};
