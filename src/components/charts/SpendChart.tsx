import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function SpendChart({ data }: any) {
  return (
    <ResponsiveContainer height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Bar dataKey="spend" fill="#4F46E5" />
      </BarChart>
    </ResponsiveContainer>
  );
}
