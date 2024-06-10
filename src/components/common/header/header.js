import React from 'react';
import { Typography, Dropdown, Button, Row, Col, Space, Menu, Tabs  } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import tvsLogo from '../../../assets/TVS_Motor_logo.png'; 
import './header.css'; 
import { useAuth } from '../../authContext';
import Uploader from '../../../pages/upload/upload'

const { Title } = Typography;
const { TabPane } = Tabs;


const PageHeader = () =>{ 
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

return (
  <>
    <div className="header">
      <Row justify="space-between" align="middle" className="header-row">
        <Col xs={24} sm={24} md={5} lg={5} xl={5} className="header-logo-container">
          <img src={tvsLogo} alt="TVS Logo" className="header-logo" />
        </Col>
        <Col xs={24} sm={24} md={14} lg={14} xl={14} className="header-title-container">
          <Title level={3} className="header-title">Townwise Data Automation</Title>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6} xl={6} className="header-user">
          <p className="header-user-name">John Doe</p>
          <Dropdown overlay={<Menu onClick={handleMenuClick} items={items} />} trigger={['click']}>
            <Space>
              <Button className="header-button">
                <DownOutlined />
              </Button>
            </Space>
          </Dropdown>
        </Col>
      </Row>
      <br/><br/>
    </div>
    <div className='tabs-container'>
      <Row>
        <Col span={24}>
          <Tabs defaultActiveKey="1" type="card" tabPosition="top" className="responsive-tabs">
            <TabPane tab="Upload" key="1">
              <Uploader />
            </TabPane>
            <TabPane tab="Status" key="2">
              {/* Content for Status tab */}
            </TabPane>
            <TabPane tab="Report" key="3">
              {/* Content for Townwise tab */}
            </TabPane>
            <TabPane tab="Johari" key="4">
              {/* Content for Townwise tab */}
            </TabPane>
            <TabPane tab="Administration" key="5">
              {/* Content for Administration tab */}
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  </>
);
}

export default PageHeader;