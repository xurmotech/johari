import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import tvsLogo from '../../assets/TVS_Motor_logo.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../components/authContext';
import './login.css'; // Import the CSS file

const Login = () => {

  const { login } = useAuth();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Success:', values);
    login();
    navigate('/uploader');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row justify="center" align="middle" className="login-container">
      <Col xs={24} sm={16} md={12} lg={8} xl={6}>
        <div className="login-box">
          <div className="logo-container">
            <img src={tvsLogo} alt="TVS Logo" className="logo" />
          </div>
          <h1 className="login-title">Townwise Data Automation</h1>
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="email"
              rules={[{ required: true, message: 'Please input your email id' }]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password' }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-button">
                LOGIN
              </Button>
            </Form.Item>
          </Form>
          <a href="/support" className="support-link">Click here to submit a request or report a problem</a>
          <p className="footer-text">©2024 TVS Motor</p>
        </div>
      </Col>
    </Row>
  );
};

export default Login;




