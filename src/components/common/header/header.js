import React from 'react';
import { Layout, Typography, Dropdown, Button, Row, Col, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import tvsLogo from '../../../assets/TVS_Motor_logo.png'; 
import './header.css'; 

const { Header } = Layout;
const { Title } = Typography;

const items = [
  {
    label: 'Logout',
    key: '1',
  },
];

const PageHeader = () => (
  <Header className="header">
    <Row justify="space-between" align="middle" className="header-row">
      <Col flex="none"> </Col>
      <Col flex="auto">
        <Title level={3} className="header-title">Townwise Data Automation</Title>
      </Col>
      <Col className="header-user" flex="none">
        <span className="header-user-name">John Doe</span>
        <Dropdown menu={{ items }} trigger={['click']}>
          <Space>
            <Button className="header-button">
              <DownOutlined />
            </Button>
          </Space>
        </Dropdown>
      </Col>
      <Col flex="none"> </Col>
      <Col className="header-user" flex="none">
        <img src={tvsLogo} alt="TVS Logo" className="header-logo" />
      </Col>
      <Col flex="none"> </Col>
    </Row>
  </Header>
);

export default PageHeader;



