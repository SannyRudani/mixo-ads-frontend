import { Layout } from "antd";
import Sidebar from "../layout/Sidebar";

const { Sider, Content } = Layout;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={220}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#eff2ff",
        }}
      >
        <Sidebar />
      </Sider>

      <Layout style={{ marginLeft: 220 }}>
        <Content
          style={{
            padding: 24,
            height: "100vh",
            overflowY: "auto",
            background: "#F8FAFC",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
