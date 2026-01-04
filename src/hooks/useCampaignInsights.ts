import { useEffect, useState } from "react";
import { fetchCampaignsInsights } from "../api/insights.api";

export const useCampaignInsights = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCampaignsInsights()
      .then((res)=>setData(res))
      .finally(() => setLoading(false));
  }, []);
console.log(data)
  return { data, loading };
};
