import React from 'react';
import { Layout, Typography, Dropdown, Button, Row, Col, Space, Menu, Tabs  } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import tvsLogo from '../../../assets/TVS_Motor_logo.png'; 
import './header.css'; 
import { useAuth } from '../../authContext';
import Uploader from '../../../pages/uploader'

const { Header } = Layout;
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
return(
  <>
  <div className="header">
    <Row justify="space-between" align="middle" className="header-row">
      {/* <Col flex="none"> </Col> */}
      <Col flex="auto">
        <Title level={3} className="header-title">Townwise Data Automation</Title>
      </Col>
      <Col className="header-user" flex="none">
        <span className="header-user-name">John Doe</span>
        <Dropdown overlay={<Menu onClick={handleMenuClick} items={items} />}  trigger={['click']}>
          <Space>
            <Button className="header-button">
              <DownOutlined />
            </Button>
          </Space>
        </Dropdown>
      </Col>
      {/* <Col flex="none"> </Col> */}
      <Col className="header-user" flex="none">
        <img src={tvsLogo} alt="TVS Logo" className="header-logo" />
      </Col>
      <Col flex="none"> </Col>
    </Row>
    <br/><br/>
   
  </div>
  <div className='tabs-container'>
  <Row >
    <Tabs defaultActiveKey="1" type="card">
      <TabPane tab="Uploader" key="1">
        <Uploader />
      </TabPane>
      <TabPane tab="Status" key="2">
        {/* Content for Status tab */}
      </TabPane>
      <TabPane tab="Townwise" key="3">
        {/* Content for Townwise tab */}
      </TabPane>
      <TabPane tab="Johari" key="4">
        {/* Content for Townwise tab */}
      </TabPane>
      <TabPane tab="Administration" key="5">
        {/* Content for Administration tab */}
      </TabPane>
    </Tabs>
    </Row>
  
  </div>
  </>
);
}
export default PageHeader;


