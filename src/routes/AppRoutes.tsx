import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Campaigns from "../pages/Campaigns";
import CampaignDetails from "../pages/CampaignDetails";
import ProtectedRoute from "./ProtectedRoute";
import AuthLayout from "../components/layout/AuthLayout";
import DashboardLayout from "../components/layout/DashboardLayout";

export default function AppRoutes() {
  return (
    <Routes>
      {/* 🔓 PUBLIC ROUTES */}
      <Route
        path="/login"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />

      <Route
        path="/signup"
        element={
          <AuthLayout>
            <Signup />
          </AuthLayout>
        }
      />

      {/* 🔐 PROTECTED ROUTES */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/campaigns"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <Campaigns />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/campaigns/:id"
        element={
          <ProtectedRoute>
            <DashboardLayout>
              <CampaignDetails />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      {/* DEFAULT */}
      <Route path="/" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}
