import { useEffect, useState } from "react";
import { fetchCampaignInsightStream } from "../api/insights.api";

export const useCampaignInsightStream = (id: string) => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchCampaignInsightStream(id).then(setData);
  }, [id]);

  return data;
};
