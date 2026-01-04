import { api } from "./axios";

/**
 * GLOBAL CAMPAIGNS INSIGHTS
 * GET /insights/campaigns/insights
 */
export const fetchCampaignsInsights = async () => {
  const res = await api.get("/campaigns/insights");
  return res.data.insights;
};

/**
 * SINGLE CAMPAIGN INSIGHTS
 * GET /insights/campaigns/{id}/insights
 */
export const fetchCampaignInsightById = async (id: string) => {
  const res = await api.get(`/campaigns/${id}/insights`);
  return res.data.insights;
};

/**
 * CAMPAIGN INSIGHTS STREAM
 * GET /insights/campaigns/{id}/insights/stream
 */
export const fetchCampaignInsightStream = async (id: string) => {
  const res = await api.get(`/campaigns/${id}/insights/stream`);
  return res.data;
};
