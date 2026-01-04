import AppLayout from "./components/layout/DashboardLayout";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  );
}
