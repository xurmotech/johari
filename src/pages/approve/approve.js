import React, { useState } from 'react';
import { Table, Button, Row, Col } from 'antd';
import MonthDropdown from '../../components/common/dropdowns/monthselect';
import './approve.css';


// Sample data for the table
const data = [
  { key: '1', town: 'Tespur', townGroup: 'Tespur', HMC: 399, Honda: 558, Bajaj: 609, Yamaha: 262, Suzuki: 59, RoyalEnfield: 118, Piaggio: 0, HarleyDavidson: 0, Husqvarna: 0, Kawasaki: 0, Triumph: 0, Total: 2005 },
  // ... (add more data rows as needed)
];

const columns = [
  { title: 'Town', dataIndex: 'town', key: 'town' },
  { title: 'Town Group', dataIndex: 'townGroup', key: 'townGroup' },
  { title: 'HMC', dataIndex: 'HMC', key: 'HMC' },
  { title: 'Honda', dataIndex: 'Honda', key: 'Honda' },
  { title: 'Bajaj', dataIndex: 'Bajaj', key: 'Bajaj' },
  { title: 'Yamaha', dataIndex: 'Yamaha', key: 'Yamaha' },
  { title: 'Suzuki', dataIndex: 'Suzuki', key: 'Suzuki' },
  { title: 'Royal Enfield', dataIndex: 'RoyalEnfield', key: 'RoyalEnfield' },
  { title: 'Piaggio', dataIndex: 'Piaggio', key: 'Piaggio' },
  { title: 'Harley Davidson', dataIndex: 'HarleyDavidson', key: 'HarleyDavidson' },
  { title: 'Husqvarna', dataIndex: 'Husqvarna', key: 'Husqvarna' },
  { title: 'Kawasaki', dataIndex: 'Kawasaki', key: 'Kawasaki' },
  { title: 'Triumph', dataIndex: 'Triumph', key: 'Triumph' },
  { title: 'Total', dataIndex: 'Total', key: 'Total' },
];

const Approve = () => {

  return (
    <div className="approve-page">
      <div className = 'approve-header' >
        <Row gutter = {16} justify="center"> 
                <Col span={24} className="file-info">
                        <span>1 file pending your approval: <span className="file-name">File1.xlsx</span></span>
                </Col>
        </Row>
        <Row gutter = {16} justify="left">
          <Col>
            <MonthDropdown/>
          </Col>
          <Col >
            <div>Uploaded Date: 05-Jun-24 09:24:32</div>
          </Col>
        </Row>
        </div>  
      <section className="summary-view">
        <h4>Summary View</h4>
        <Table dataSource={data} columns={columns} pagination={false} scroll={{ x: 'max-content' }} />
      </section>
      <footer>
        <Row justify="space-between" gutter = {16} align="middle" style={{ marginTop: '20px' }}>
        <Col xs={24} sm={12} md={8} lg={6} xl={4} className="left-button">
                <Button type="default">Download File</Button>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={4} className="right-buttons">
                <Col>
                <Button type="default">Reject</Button>
                </Col>
                <Col>
                <Button className='primary-button'>Approve & Submit</Button>
                </Col>
        </Col>
        </Row>
      </footer>
    </div>
  );
};

export default Approve;
