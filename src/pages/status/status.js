import React from 'react';
import { Row, Col, Card, Tabs} from 'antd';
import MonthDropdown from '../../components/common/dropdowns/monthselect';
import './status.css';
import CountryDropdown from '../../components/common/dropdowns/countryselect';

const { TabPane } = Tabs;

const Status = () => {
  return (
    <div className="status-container">
        <Col span={24}>
              <div className="status-header">
                <MonthDropdown /> 
              </div>
        </Col>
        <Tabs defaultActiveKey="1">
        <TabPane tab="Region Townwise" key="1">
          <Row gutter={[16, 16]} justify="center">
            <Col span={18}>
              <Row gutter={[16, 16]} justify="left">
                  <Card title="Asia" bordered={false} className="region-card">
                    <Card.Grid className="country-grid green">India</Card.Grid>
                    <Card.Grid className="country-grid green">China</Card.Grid>
                    <Card.Grid className="country-grid green">Japan</Card.Grid>
                    <Card.Grid className="country-grid green">Nepal</Card.Grid>
                    <Card.Grid className="country-grid green">Sri Lanka</Card.Grid>
                    <Card.Grid className="country-grid green">Bangladesh</Card.Grid>
                    <Card.Grid className="country-grid green">Vietnam</Card.Grid>
                    <Card.Grid className="country-grid green">Thailand</Card.Grid>
                    <Card.Grid className="country-grid green">Malaysia</Card.Grid>
                    <Card.Grid className="country-grid green">Bhutan</Card.Grid>
                    {/* Add more countries as needed */}
                  </Card>
                </Row>
                <Row gutter={[16, 16]} justify="left">
                  <Card title="Europe" bordered={false} className="region-card">
                    <Card.Grid className="country-grid green">France</Card.Grid>
                    <Card.Grid className="country-grid green">Germany</Card.Grid>
                    <Card.Grid className="country-grid green">Italy</Card.Grid>
                    {/* Add more countries as needed */}
                  </Card>
                </Row>
            </Col>
            <Col span={6}>
                <div className="legend-container">
                        <h3>Legend</h3>
                        <div className="legend-item">
                        <span className="legend-color green"></span>
                        Data submitted to HO
                        </div>
                        <div className="legend-item">
                        <span className="legend-color yellow"></span>
                        Data pending response by CBH
                        </div>
                        <div className="legend-item">
                        <span className="legend-color red"></span>
                        Data upload pending
                        </div>
                </div>
                </Col>
          </Row>
        </TabPane>
        <TabPane tab="Country Townwise" key="2">
                <CountryDropdown name="country" label="Country" rules={[{ required: true, message: 'Please select a country' }]}/>
        </TabPane>
        <TabPane tab="Competition Raw Data for HO" key="3">
        </TabPane>
        </Tabs>
    </div>
  );
};

export default Status;
