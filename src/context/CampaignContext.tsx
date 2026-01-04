import { createContext, useContext, useEffect, useState } from "react";
import { fetchCampaigns } from "../api/campaigns.api";
import type { Campaign } from "../types/campaign.types";

const CampaignContext = createContext<any>(null);

export function CampaignProvider({ children }: { children: React.ReactNode }) {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCampaigns()
      .then(setCampaigns)
      .finally(() => setLoading(false));
  }, []);

  return (
    <CampaignContext.Provider value={{ campaigns, loading }}>
      {children}
    </CampaignContext.Provider>
  );
}

export const useCampaignContext = () => useContext(CampaignContext);
