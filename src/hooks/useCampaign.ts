import { useEffect, useState } from "react";
import { fetchCampaignById } from "../api/campaigns.api";
import type { Campaign } from "../types/campaign.types";

export const useCampaign = (id: string) => {
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCampaignById(id)
      .then(setCampaign)
      .finally(() => setLoading(false));
  }, [id]);

  return { campaign, loading };
};
