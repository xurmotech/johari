import React, { useState } from 'react';
import { Form, Button, Select, Table, Row, Col } from 'antd';
import MonthDropdown from '../../components/common/dropdowns/monthselect';
import './report.css';
import DownloadButton from '../../components/common/downloadButton';
import {dataMappings} from '../../components/common/downloadDataMapping';

const { Option } = Select;

const regions = [
  { label: 'Region 1', value: 'region1' },
  { label: 'Region 2', value: 'region2' },
];

const countries = [
  { label: 'Country 1', value: 'country1' },
  { label: 'Country 2', value: 'country2' },
  { label: 'Country 3', value: 'country3' },
];

const towns = [
  { label: 'Town 1', value: 'town1' },
  { label: 'Town 2', value: 'town2' },
  { label: 'Town 3', value: 'town3' },
  { label: 'Town 4', value: 'town4' },
];

const columns = [
  { title: 'Country', dataIndex: 'country', key: 'country' },
  { title: 'Town', dataIndex: 'town', key: 'town' },
  { title: 'Town Group', dataIndex: 'townGroup', key: 'townGroup' },
  { title: 'DESTINI', dataIndex: 'destini', key: 'destini' },
  { title: 'GLAMOUR', dataIndex: 'glamour', key: 'glamour' },
  { title: 'HF DELUXE', dataIndex: 'hfDeluxe', key: 'hfDeluxe' },
  { title: 'KARIZMA XMR', dataIndex: 'karizmaXmr', key: 'karizmaXmr' },
  { title: 'MAESTRO', dataIndex: 'maestro', key: 'maestro' },
  { title: 'MAVRICK 440', dataIndex: 'mavrick440', key: 'mavrick440' },
  { title: 'PASSION XTEC', dataIndex: 'passionXtec', key: 'passionXtec' },
  { title: 'PASSION+', dataIndex: 'passionPlus', key: 'passionPlus' },
  { title: 'PLEASURE PLUS', dataIndex: 'pleasurePlus', key: 'pleasurePlus' },
  { title: 'SPLENDOR+', dataIndex: 'splendorPlus', key: 'splendorPlus' },
  { title: 'SUPER SPLENDOR', dataIndex: 'superSplendor', key: 'superSplendor' },
  { title: 'ZOOM 110', dataIndex: 'zoom110', key: 'zoom110' },
  { title: 'XPULSE 200', dataIndex: 'xpulse200', key: 'xpulse200' },
  { title: 'XTREME 125', dataIndex: 'xtreme125', key: 'xtreme125' },
  { title: 'XTREME 160', dataIndex: 'xtreme160', key: 'xtreme160' },
  { title: 'XTREME 200', dataIndex: 'xtreme200', key: 'xtreme200' },
];

const Townwise = () => {
  const [data, setData] = useState([]);
  const [totalRows, setTotalRows] = useState(0);

  const fetchReport = (values) => {
    console.log('Fetching report for:', values);
    // Mock data for demonstration
    const mockData = Array.from({ length: 25 }, (_, index) => ({
      key: index + 1,
      country: `Country ${index + 1}`,
      town: `Town ${index + 1}`,
      townGroup: `Group ${index + 1}`,
      destini: Math.floor(Math.random() * 100),
      glamour: Math.floor(Math.random() * 100),
      hfDeluxe: Math.floor(Math.random() * 100),
      karizmaXmr: Math.floor(Math.random() * 100),
      maestro: Math.floor(Math.random() * 100),
      mavrick440: Math.floor(Math.random() * 100),
      passionXtec: Math.floor(Math.random() * 100),
      passionPlus: Math.floor(Math.random() * 100),
      pleasurePlus: Math.floor(Math.random() * 100),
      splendorPlus: Math.floor(Math.random() * 100),
      superSplendor: Math.floor(Math.random() * 100),
      zoom110: Math.floor(Math.random() * 100),
      xpulse200: Math.floor(Math.random() * 100),
      xtreme125: Math.floor(Math.random() * 100),
      xtreme160: Math.floor(Math.random() * 100),
      xtreme200: Math.floor(Math.random() * 100),
    }));
    setData(mockData.slice(0, 10));
    setTotalRows(mockData.length);
  };

  return (
    <div className='report-form'>
      <Form layout="vertical" onFinish={fetchReport}>
        <Row gutter={16}>
          <Col span = {24}>
            <div className="form-header">
            <Form.Item >
              <MonthDropdown />
            </Form.Item>
            </div>
          </Col>
        </Row>
        <Row gutter={16}>  
          <Col xs={24} sm={12} md={8}>
            <Form.Item name="regions" label="Select Regions">
              <Select mode="multiple">
                {regions.map((region) => (
                  <Option key={region.value} value={region.value}>
                    {region.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item name="countries" label="Select Countries">
              <Select mode="multiple" >
                {countries.map((country) => (
                  <Option key={country.value} value={country.value}>
                    {country.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Form.Item name="towns" label="Select Towns">
              <Select mode="multiple" placeholder="Please select towns">
                {towns.map((town) => (
                  <Option key={town.value} value={town.value}>
                    {town.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item>
              <Button type="primary" className="primary-button" htmlType="submit">
                Generate Preview
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      {data.length > 0 && (
        <>
        <div className="table-header">
          <div className="total-rows">Total rows: {totalRows}</div>
        </div>
        <Table dataSource={data} columns={columns} pagination={false} scroll={{ x: 'max-content' }}/>
        <div className="export-button">
              <DownloadButton
                style={{width:'11%'}}
                data={dataMappings['Report']} // Pass the entire data object
                buttonText="Download"
              />
        </div>
        </>
      )}
    </div>
  );
};

export default Townwise;





