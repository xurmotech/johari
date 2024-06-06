import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import tvsLogo from '../../assets/TVS_Motor_logo.png';

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' , backgroundColor: '#1E3D88'}}>
      <Col xs={24} sm={16} md={12} lg={8} xl={6}>
        <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #f0f0f0', borderRadius: '8px', backgroundColor: '#fff' }}>
          <div style={{ marginBottom: '20px' }}>
            <img src={tvsLogo} alt="TVS Logo" style={{ width: '100px' }} />
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
              <Input.Password placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: '#FF5733'}}>
                LOGIN
              </Button>
            </Form.Item>
          </Form>
          <a href="/support" style={{ display: 'block', marginTop: '10px' }}>Click here to submit a request or report a problem</a>
          <p style={{ marginTop: '20px', color: '#999' }}>©2024 TVS Motor</p>
        </div>
      </Col>
    </Row>
  );
};

export default Login;



