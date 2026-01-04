import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card } from "antd";
import { CAMPAIGN_STATUS_MAP } from "../../utils/status";

export default function StatusChart({
  statusCounts,
}: {
  statusCounts: Record<string, number>;
}) {
  const data = Object.keys(statusCounts).map((status) => ({
    name: CAMPAIGN_STATUS_MAP[status]?.label || status,
    value: statusCounts[status],
    color: CAMPAIGN_STATUS_MAP[status]?.color,
  }));

  return (
    <Card title="Campaign Status">
      <ResponsiveContainer height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" label>
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}
