import { api } from "./axios";
import type { Campaign } from "../types/campaign.types";

export const fetchCampaigns = async (): Promise<Campaign[]> => {
  const { data } = await api.get("/campaigns");
  return data?.campaigns;
};

export const fetchCampaignById = async (id: string): Promise<Campaign> => {
  const { data } = await api.get(`/campaigns/${id}`);
  return data?.campaign;
};
