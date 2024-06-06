import React from 'react';
import { Layout, Typography, Dropdown, Button, Row, Col, Space, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import tvsLogo from '../../assets/TVS_Motor_logo.png'; // Adjust the path accordingly
import { useAuth } from '../authContext';

const { Header } = Layout;
const { Title } = Typography;


const PageHeader = () => {

  const { logout } = useAuth(); // Access logout function from context

  const handleMenuClick = ({ key }) => {
    if (key === '1') {
      logout();
    }
  };

  const items = [
    {
      label: 'Logout',
      key: '1',
    },
  ];

return(
  <Header style={{ backgroundColor: '#fff' }}>
    <Row justify="space-between" align="middle" style={{ borderBottom: '4px solid', borderImage: 'linear-gradient(to right, #1E3D88, #ff0000) 1'}}>
      <Col>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Title level={3} style={{ margin: 0, color: '#1E3D88' }}>Townwise Data Automation</Title>
        </div>
      </Col>
      <Col>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '10px', fontSize: '16px' }}>John Doe</span>
          <Dropdown overlay={<Menu onClick={handleMenuClick} items={items} />} trigger={['click']}>
              <Space>
              <Button style={{ border: 'none', boxShadow: 'none' }}>
                  <DownOutlined />
                </Button>
              </Space>
          </Dropdown>
          <img src={tvsLogo} alt="TVS Logo" style={{ width: '100px', marginRight: '20px' }} />
        </div>
      </Col>
    </Row>
  </Header>
);
}
export default PageHeader;


