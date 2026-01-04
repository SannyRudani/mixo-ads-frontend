import { Layout, Avatar, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { logoutUser } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import PageHeader from "../common/PageHeader";

const { Header } = Layout;

export default function Topbar({
  pageTitle,
  subTitle,
}: {
  pageTitle: string;
  subTitle?: string;
}) {
  const navigate = useNavigate();

  const items = [
    {
      key: "logout",
      label: "Logout",
      onClick: () => {
        logoutUser();
        navigate("/login");
      },
    },
  ];

  return (
    <Header
      style={{
        background: "#fff",
        marginBottom: "18px",
        padding: "0px 18px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <PageHeader title={pageTitle} subTitle={subTitle} />
      {/* User */}
      <Dropdown menu={{ items }}>
        <Avatar
          style={{ backgroundColor: "#2563EB", cursor: "pointer" }}
          icon={<UserOutlined />}
        />
      </Dropdown>
    </Header>
  );
}
