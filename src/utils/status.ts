export const CAMPAIGN_STATUS_MAP: Record<
  string,
  { label: string; color: string }
> = {
  active: {
    label: "Active",
    color: "#22C55E", // green
  },
  paused: {
    label: "Paused",
    color: "#F59E0B", // orange
  },
  completed: {
    label: "Completed",
    color: "#64748B", // gray/blue
  },
};
