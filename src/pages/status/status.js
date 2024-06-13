import React, { useState } from 'react';
import { Row, Col, Card, Tabs, Select, Typography, Modal, Button } from 'antd';
import MonthDropdown from '../../components/common/dropdowns/monthselect';
import './status.css';
import CountryDropdown from '../../components/common/dropdowns/countryselect';
import * as XLSX from 'xlsx';
import { DownloadOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Option } = Select;
const { Title } = Typography;

const Status = () => {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedTab, setSelectedTab] = useState('1');
  
  const Consolidatedcountries1 = ['India', 'China', 'Japan', 'Nepal', 'Sri Lanka', 'Bangladesh', 'Vietnam', 'Thailand', 'Malaysia', 'Bhutan'];
  const Consolidatedcountries2 = ['France', 'Germany', 'Italy'];
  
  const Competitioncountry1 = ['China'];
  const Competitioncountry2 = ['France'];
  const filesToDownload = ['File1.xlsx', 'File2.xlsx', 'File3.xlsx'];

  const handleYearChange = (value) => {
    setSelectedYear(value);
    // Logic to update months based on the selected year can be added here
  };
  const handleTabChange = (key) => {
    console.log("in tab", key)
    setSelectedTab(key);
  };

  const handleGridClick = (country) => {
    setSelectedCountry(country);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const downloadTemplate = (fileName) => {
    const worksheetData = [
      ['Header1', 'Header2', 'Header3'], // Add your headers here
      [0, 0, 0], // Sample data
    ];
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Template');
    XLSX.writeFile(workbook, fileName);
  };

  return (
    <div className="status-container">
      <Col span={24}>
      <div className="status-header">
          <Row >
            <Col xs={24} sm={12} md={4}>
              <MonthDropdown />
            </Col>
            <Col  md={1}></Col>
            <Col xs={24} sm={12} md={19}  className="legend-container">
              <Row>
              <h3>Legend</h3>
              </Row>
              <Row>
                <Col>
                <div className="legend-item">
                  <span className="legend-color green"></span>
                  Data submitted to HO
                </div>
                </Col>
                <Col>
                <div className="legend-item">
                  <span className="legend-color yellow"></span>
                  Data pending response by CBH
                </div>
                </Col>
                <Col>
                <div className="legend-item">
                  <span className="legend-color red"></span>
                  Data upload pending
                </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Col>

      <Title level={4} className="title">Consolidated Townwise for HO</Title>
      <Tabs defaultActiveKey="1" onChange={handleTabChange}>
        <TabPane tab="Consolidated Townwise for HO" key="1">
          <Row gutter={[16, 16]} justify="center">
            <Col span={18}>
              <Row gutter={[16, 16]} justify="left">
                <Card title="Asia" bordered={false} className="region-card">
                  {Consolidatedcountries1.map((country, index) => (
                    <Card.Grid key={index} className="country-grid green" onClick={() => handleGridClick(country)}>
                      {country}
                    </Card.Grid>
                  ))}
                </Card>
              </Row>
              <Row gutter={[16, 16]} justify="left">
                <Card title="Europe" bordered={false} className="region-card">
                  {Consolidatedcountries2.map((country, index) => (
                    <Card.Grid key={index} className="country-grid green" onClick={() => handleGridClick(country)}>
                      {country}
                    </Card.Grid>
                  ))}
                </Card>
              </Row>
            </Col>
          </Row>
        </TabPane>
        <TabPane tab="Competition Raw Data for HO" key="2">
          <Row gutter={[16, 16]} justify="center">
            <Col span={18}>
              <Row gutter={[16, 16]} justify="left">
                <Card title="Asia" bordered={false} className="region-card">
                  {Competitioncountry1.map((country, index) => (
                    <Card.Grid key={index} className="country-grid grey" onClick={() => handleGridClick(country)}>
                      {country}
                    </Card.Grid>
                  ))}
                </Card>
              </Row>
              <Row gutter={[16, 16]} justify="left">
                <Card title="Europe" bordered={false} className="region-card">
                  {Competitioncountry2.map((country, index) => (
                    <Card.Grid key={index} className="country-grid grey" onClick={() => handleGridClick(country)}>
                      {country}
                    </Card.Grid>
                  ))}
                </Card>
              </Row>
            </Col>
          </Row>
        </TabPane>
      </Tabs>



<Modal
        title={`${selectedCountry} : Townwise data`}
        visible={modalVisible}
        onOk={handleModalClose}
        onCancel={handleModalClose}
        footer={null}
      >
        
            <p>Status: Data submitted to HO</p>
            <p>Uploaded Date: 04 Jun 24</p>
            <p>Approved Date: 04 Jun 24</p>
          
        {selectedTab === '2' ? 
        filesToDownload.map((file, index) => (
          <div className="download-container center-align" key={index}>
            <Row className="center-align">
              <Col> <p>{file}</p></Col>
              <Col>
              <Button type="link" className="primary-button download-icon" onClick={() => downloadTemplate(file)}>
              <DownloadOutlined /> 
              {/* {file} */}
            </Button>
              </Col>
            </Row>
           
            
          </div>
        ))
         : (
          <Button key="submit" type="primary"  className="primary-button" onClick={downloadTemplate}>
            Download Excel
          </Button>
        )}
        
      </Modal>


    </div>
  );
};

export default Status;
