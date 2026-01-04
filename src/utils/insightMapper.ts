export const mapInsightSummary = (data: any) => ({
  timestamp: new Date(data.timestamp).toLocaleString(),

  campaigns: {
    total: data.total_campaigns,
    active: data.active_campaigns,
    paused: data.paused_campaigns,
    completed: data.completed_campaigns,
  },

  metrics: {
    impressions: data.total_impressions,
    clicks: data.total_clicks,
    conversions: data.total_conversions,
    spend: data.total_spend,
  },

  averages: {
    ctr: data.avg_ctr,
    cpc: data.avg_cpc,
    conversionRate: data.avg_conversion_rate,
  },
});
