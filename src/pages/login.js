import React from 'react';
import { Form, Input, Button } from 'antd';
import './login.css'; 
import tvsLogo from '../assets/TVS_Motor_logo.png';

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img src = {tvsLogo} alt="TVS Logo" /> 
        </div>
        <h1 style={{ fontSize: '24px' }}>Townwise Data Automation</h1>
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
            <Input placeholder="Password" />
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
    </div>
  );
};

export default Login;


