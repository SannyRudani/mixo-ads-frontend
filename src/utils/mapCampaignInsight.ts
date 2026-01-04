export const mapCampaignInsight = (data: any) => ({
  id: data.campaign_id,
  timestamp: new Date(data.timestamp).toLocaleString(),

  primary: {
    impressions: data.impressions,
    clicks: data.clicks,
    conversions: data.conversions,
    spend: data.spend,
  },

  secondary: {
    ctr: data.ctr,
    cpc: data.cpc,
    conversionRate: data.conversion_rate,
  },

  timeline: data.timeline || [],
});
