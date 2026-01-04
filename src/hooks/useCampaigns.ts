import { useCampaignContext } from "../context/CampaignContext";

export const useCampaigns = () => {
  const { campaigns, loading } = useCampaignContext();
  return { data: campaigns, loading };
};
