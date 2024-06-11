import React, { useState } from 'react';
import { Row, Col, Card, Tabs, Select} from 'antd';
import MonthDropdown from '../../components/common/dropdowns/monthselect';
import './status.css';
import CountryDropdown from '../../components/common/dropdowns/countryselect';

const { TabPane } = Tabs;
const { Option } = Select;
const { Grid } = Card;

const Status = () => {
        const [selectedYear, setSelectedYear] = useState('2024');

        const months = [
          { month: 'APR', status: 'green' },
          { month: 'MAY', status: 'green' },
          { month: 'JUN', status: 'green' },
          { month: 'JUL', status: 'red' },
          { month: 'AUG', status: 'yellow' },
          { month: 'SEP', status: 'green' },
          { month: 'OCT', status: 'red' },
          { month: 'NOV', status: 'green' },
          { month: 'DEC', status: 'yellow' },
          { month: 'JAN', status: 'green' },
          { month: 'FEB', status: 'green' },
          { month: 'MAR', status: 'green' },
        ];
      
        const handleYearChange = (value) => {
          setSelectedYear(value);
          // Logic to update months based on the selected year can be added here
        };

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
                <Row gutter={[16, 16]} justify="center">
                <Col span={8}>
                <Card
                        title={
                        <div className="card-title">
                        FY <Select defaultValue="2024" onChange={handleYearChange}>
                        <Option value="2023">2023</Option>
                        <Option value="2024">2024</Option>
                        <Option value="2025">2025</Option>
                        {/* Add more years as needed */}
                        </Select>
                        </div>
                        }
                        bordered={false}
                        className="region-card"
                >
                        {months.map((item, index) => (
                        <Grid key={index} className={`month-grid ${item.status}`}>
                        {item.month} {selectedYear.slice(-2)}
                        </Grid>
                        ))}
                </Card>
                </Col>
                </Row>
        </TabPane>
        <TabPane tab="Competition Raw Data for HO" key="3">
        </TabPane>
        </Tabs>
    </div>
  );
};

export default Status;
