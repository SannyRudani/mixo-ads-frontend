import { Card, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import { saveUser } from "../utils/auth";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <Card style={{ width: 420, borderRadius: 12 }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <img src="/Logo.png" alt="Mixo Ads" height={32} />
        </div>
        <h1 style={{ textAlign: "center", marginBottom: 24 }}>
          Create Account
        </h1>

        <Form
          layout="vertical"
          onFinish={(v) => {
            saveUser(v);
            navigate("/login");
          }}
        >
          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>

          <Button type="primary" htmlType="submit" block size="large">
            Create Account
          </Button>

          <div style={{ textAlign: "center", marginTop: 16 }}>
            Already have an account?{" "}
            <a onClick={() => navigate("/login")}>Sign In</a>
          </div>
        </Form>
      </Card>
    </AuthLayout>
  );
}
