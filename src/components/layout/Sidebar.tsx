import { Menu } from "antd";
import { BarChartOutlined, TableOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const selectedKey = location.pathname.startsWith("/campaigns")
    ? "campaigns"
    : "dashboard";

  return (
    <div>
      {/* Logo */}
      <div
        style={{
          textAlign: "center",
          paddingTop: 24,
          paddingBottom: 20,
        }}
      >
        <img src="/Logo.png" alt="Mixo Ads" height={32} />
      </div>

      <Menu
        theme="light"
        mode="inline"
        style={{ backgroundColor: "transparent" }}
        className="mixo-sidebar-menu"
        selectedKeys={[selectedKey]}
        onClick={({ key }) => navigate(`/${key}`)}
        items={[
          {
            key: "dashboard",
            icon: <BarChartOutlined />,
            label: "Dashboard",
          },
          {
            key: "campaigns",
            icon: <TableOutlined />,
            label: "Campaigns",
          },
        ]}
      />
    </div>
  );
}
