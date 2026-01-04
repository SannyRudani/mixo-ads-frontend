import { Card, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/layout/AuthLayout";
import { loginUser } from "../utils/auth";

export default function Login() {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <Card style={{ width: 420, borderRadius: 12 }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <img src="/Logo.png" alt="Mixo Ads" height={32} />
        </div>

        <h1 style={{ textAlign: "center", marginBottom: 24 }}>Sign In</h1>

        <Form
          layout="vertical"
          onFinish={(values) => {
            const success = loginUser(values.email, values.password);

            if (success) {
              navigate("/dashboard");
            }
          }}
        >
          <Form.Item label="Email" name="email" rules={[{ required: true }]}>
            <Input placeholder="Enter your email address" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block size="large">
            Sign In
          </Button>

          <div style={{ textAlign: "center", marginTop: 16 }}>
            Don&apos;t have an account?{" "}
            <a onClick={() => navigate("/signup")}>Create One</a>
          </div>
        </Form>
      </Card>
    </AuthLayout>
  );
}
