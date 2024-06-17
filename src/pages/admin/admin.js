import React, { useState, useEffect }  from 'react';
import { Tabs, Row, Col, Table, Select, Button, Input, DatePicker, Radio, Form, InputNumber, Modal } from 'antd';
import './admin.css';
import DownloadButton from '../../components/common/downloadButton';
import {dataMappings} from '../../components/common/downloadDataMapping';
import * as XLSX from 'xlsx';

const { TabPane } = Tabs;
const { Option } = Select;
const { RangePicker } = DatePicker;

const Admin = () => {
  const [form] = Form.useForm();
  const initialDataManageUsers = [
    { key: 1, email: 'john.doe@example.com', role: 'Admin', country: 'USA', dateAdded: '2022-01-01' },
    { key: 2, email: 'jane.smith@example.com', role: 'User', country: 'Canada', dateAdded: '2022-02-15' },
    { key: 3, email: 'sam.jones@example.com', role: 'Moderator', country: 'UK', dateAdded: '2022-03-10' },
    { key: 4, email: 'alice.wang@example.com', role: 'User', country: 'China', dateAdded: '2022-04-22' },
  ];

  const initialDataUsageLogs = [
    { key: 1, date: '14-Jun-20', time: '11:01:55', username: 'S. Viji', role: 'HO Admin', action: 'Downloaded 17122 rows of Townwise data'},
    { key: 2, date: '13-Jun-20', time: '12:01:55', username: 'Payal Jain', role: 'Area Manager', action: 'Logout'},
    { key: 3, date: '13-Jun-20', time: '11:01:25', username: 'Gowtham M', role: 'MIS User', action: 'Downloaded 17122 rows of Townwise data'},
    { key: 4, date: '12-Jun-20', time: '10:01:35', username: 'AO Madurai', role: 'HO Admin', action: 'Downloaded 17122 rows of Townwise data'},
  ];


  const [searchText, setSearchText] = useState('');
  const [filteredDataManageUsers, setfilteredDataManageUsers] = useState(initialDataManageUsers);
  const [filteredDataUsageLogs, setFilteredDataUsageLogs] = useState(initialDataUsageLogs);
  const [activeTabKey, setActiveTabKey] = useState('1'); 
  const [file, setFile] = useState(null);
  const [validationResult, setValidationResult] = useState('');
  const [error, setError] = useState('');
  const [fileName, setFileName] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);

    if (activeTabKey === '2') {
      const filtered = initialDataManageUsers.filter(item =>
        item.email.toLowerCase().includes(value) ||
        item.role.toLowerCase().includes(value) ||
        item.country.toLowerCase().includes(value) ||
        item.dateAdded.toLowerCase().includes(value)
      );
      setfilteredDataManageUsers(filtered);
    } else if (activeTabKey === '3') {
      const filtered = initialDataUsageLogs.filter(item =>
        item.date.toLowerCase().includes(value) ||
        item.time.toLowerCase().includes(value) ||
        item.username.toLowerCase().includes(value) ||
        item.role.toLowerCase().includes(value) ||
        item.action.toLowerCase().includes(value)
      );
      setFilteredDataUsageLogs(filtered);
    }
  };

  const handleUploadAndUpdate = (type) => {
    console.log(`Upload and Update ${type}`);
  };

  const handleModalClose = () => {
    setError('');   
    setFile(null);
    setFileName('');
    // setModalClose(true)
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    const validTypes = [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ];

    if (file && validTypes.includes(file.type)) {
      setFile(file);
      console.log('Upload Success:', file);
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const jsonData = {};
        workbook.SheetNames.forEach((sheetName) => {
          const worksheet = workbook.Sheets[sheetName];
          jsonData[sheetName] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        });
        handleValidation(jsonData);
      };
      reader.readAsArrayBuffer(file);
    } else {
      console.log('Invalid file format. Please upload an Excel file.');
      setError('Invalid file format. Please upload an Excel file.');
    }
  };

  const handleValidation = (jsonData) => {
    let isValid = true;
    let errorMessage = '';

    for (const [sheetName, sheetData] of Object.entries(jsonData)) {
      // eslint-disable-next-line no-loop-func
      sheetData.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (typeof cell !== 'string') {
            isValid = false;
            errorMessage = "Invalid Data!!";
            console.log("in sheet", sheetData)
          }
        });
      });
    }

    if (isValid) {
      setFileName(file?.name);
      setValidationResult(file?.name);
      console.log('Validation Successful');
    } else {
      setFileName('');
      setValidationResult('Validation Failed');
      setError(errorMessage);
      console.log('Validation Failed');
    }
  };


  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div className="tabs-container">
      <Row>
        <Tabs activeKey={activeTabKey} defaultActiveKey="1" onChange={setActiveTabKey}>
          <TabPane tab="Settings" key="1">
            <div className="settings-container">
              <div className="settings-section">
                <div className="section-title">Location Master: </div>
                  <div className="button-group">
                    
                      <DownloadButton  
                        style={{width:'40%'}}
                        data={dataMappings['Location Master']} // Pass the entire data object
                        buttonText="Download"
                      />
                     
                     <Button
                      onClick={() => { document.getElementById('file-input-3').click(); }}
                      className="upload-update-button"
                    >
                      Upload & Update
                    </Button>
                     {fileName && <p className='filename'>{fileName}</p>}
                    <input id="file-input-3" type="file" accept=".xlsx, .xls" style={{ display: 'none' }} onChange={handleUpload} />
              
                    <span> Last Updated On: 05-Dec-23 </span>
                </div>         
                <div className="section-title">Product Master:</div>
                <div className="button-group">
                       <DownloadButton
                        style={{width:'40%'}}
                        data={dataMappings['Product Master']} // Pass the entire data object
                        buttonText="Download"
                      />
                  <Button
                      onClick={() => { document.getElementById('file-input-4').click(); }}
                      className="upload-update-button"
                    >
                      Upload & Update
                    </Button>
                     {fileName && <p className='filename'>{fileName}</p>}
                    <input id="file-input-4" type="file" accept=".xlsx, .xls" style={{ display: 'none' }} onChange={handleUpload} />
            
                  <span>Last Updated On: 06-Mar-24</span>
                </div>
               

                {/* <div className="section-title">Dealer Master:</div>
                <div className="button-group">
                  <Button
                    className="download-button"
                    onClick={() => handleDownload('Dealer Master')}
                  >
                    Download
                  </Button>
                  <Button
                    className="upload-update-button"
                    onClick={() => handleUploadAndUpdate('Dealer Master')}
                  >
                    Upload & Update
                  </Button>
                  <span>Last Updated On: 07-May-24</span>
                </div> */}
                
              </div>

              <div className="settings-section">
                {/* <Form layout="vertical">
                  <Form.Item label="Disable File Upload for MIS Users:">
                    <Radio.Group defaultValue="enableNow">
                      <Radio value="autoDisable">Auto disable every month on
                      <Input placeholder="1" style={{ width: 40, marginLeft: 10 }} /> </Radio>
                      <Radio value="enableNow" style={{ marginLeft: 10 }}>Enable Now</Radio>
                      <Radio value="disableNow" style={{ marginLeft: 10 }}>Disable Now</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Form> */}
              
                <Form.Item label="Minimum Threshold:">
                  <InputNumber  placeholder="50" />
                </Form.Item>
                <Form.Item label="Variance Threshold (%):">
                  <InputNumber  placeholder="200" />
                </Form.Item>
                <Button type="primary" className='primary-button'>Save</Button>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Manage Users" key="2">
          <Row gutter={16}>
              <Col xs={24} md={18}>
                <div className="table-header">
                  <Form> 
                    <Form.Item label = "Search" > <Input value={searchText} onChange={handleSearch} /> </Form.Item>
                  </Form>
                </div>
                <Table
                  className="custom-table-header"
                  columns={[
                    { title: 'Email Id', dataIndex: 'email', key: 'email' },
                    { title: 'User Role', dataIndex: 'role', key: 'role' },
                    { title: 'Country', dataIndex: 'country', key: 'country' },
                    { title: 'Date Added', dataIndex: 'dateAdded', key: 'dateAdded' },
                  ]}
                  dataSource={filteredDataManageUsers}
                  pagination={{ pageSize: 10 }}
                  scroll={{ x: '100%' }} // Enable horizontal scrolling if necessary
                  locale={{ emptyText: 'No data found' }}
                />
              </Col>
              <Col xs={24} md={6}>
                <div className="add-user-form">
                  <h3>Add / Modify Users</h3>
                  <Form form={form} onFinish={onFinish}>
                    <Form.Item
                      name="email"
                      label="Email Id"
                    >
                      <Input className="input" placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                      name="role"
                      label="Role"
                    >
                      <Select className="select" placeholder="Select Role">
                        <Option value="HO User">HO User</Option>
                        <Option value="MIS User">MIS User</Option>
                        <Option value="Admin">Admin</Option>
                        <Option value="CBH">CBH User</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="area"
                      label="Country"
                    >
                      <Select className="select" placeholder="Select Country">
                        <Option value="India">India</Option>
                        <Option value="USA">USA</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit" className="button primary-button">
                        Add
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Usage Logs" key="3">
          <Row gutter={16} className="filter-row">
            <Col xs={24} md={12} lg={8}>
              {/* <Input.Search placeholder="Search User" onSearch={(value) => console.log(value)} enterButton /> */}
              <Form> 
                    <Form.Item label = "Search" > <Input value={searchText} onChange={handleSearch} /> </Form.Item>
                  </Form>
            </Col>
            <Col xs={24} md={12} lg={8}>
              <RangePicker
                style={{ width: '100%' }}
                onChange={(dates, dateStrings) => console.log(dates, dateStrings)}
              />
            </Col>
            <Col xs={24} md={12} lg={4}>
              <Button type="primary" className='primary-button' block onClick={() => console.log('Filter clicked')}>
                Filter
              </Button>
            </Col>
            <Col xs={24} md={12} lg={4} className="download-button-col">
                 <DownloadButton
                        data={dataMappings['Usage']} // Pass the entire data object
                        buttonText="Download"
                  />
            </Col>
          </Row>
          <Row gutter={16}>
              <Col xs={24} md={24}>
                <Table
                  className="custom-table-header"
                  columns={[
                    { title: 'Date', dataIndex: 'date', key: 'date'},
                    { title: 'Time', dataIndex: 'time', key: 'time'},
                    { title: 'Username', dataIndex: 'username', key: 'username', width : 200},
                    { title: 'User Role', dataIndex: 'role', key: 'role'},
                    { title: 'Action', dataIndex: 'action', key: 'action'},
                  ]}
                  dataSource={filteredDataUsageLogs}
                  pagination={{ pageSize: 10 }}
                  scroll={{ x: '100%' }} // Enable horizontal scrolling if necessary
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Manage Locations" key="4">
            <Row gutter={16}>
              <Col xs={24} md={24}>
                <h3>Manage Towns</h3>
                <Form form={form}>
                  <Form.Item
                    name="country"
                    label="Country"
                    rules={[{ required: true, message: 'Please select the country!' }]}
                  >
                    <Select placeholder="Select Country">
                      <Option value="country1">Country 1</Option>
                      <Option value="country2">Country 2</Option>
                      {/* Add more options as needed */}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="town"
                    label="Town"
                    rules={[{ required: true, message: 'Please input the town!' }]}
                  >
                    <Input placeholder="Town" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" className='primary-button' htmlType="submit">Add Town</Button>
                  </Form.Item>
                </Form>
                <Table
                  columns={[{ title: 'Country', dataIndex: 'country', key: 'country' }, { title: 'Town', dataIndex: 'town', key: 'town' }]}
                  dataSource={[]} // Add your data source here
                  pagination={{ pageSize: 10 }}
                />
              </Col>
              <Col xs={24} md={24}>
                <h3>Manage Countries</h3>
                <Form form={form}>
                  <Form.Item
                    name="country"
                    label="Country"
                    rules={[{ required: true, message: 'Please input the country!' }]}
                  >
                    <Input placeholder="Country" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary"  className='primary-button' htmlType="submit">Add Country</Button>
                  </Form.Item>
                </Form>
                <Table
                  columns={[{ title: 'Country', dataIndex: 'country', key: 'country' }]}
                  dataSource={[]} // Add your data source here
                  pagination={{ pageSize: 10 }}
                />
              </Col>
            </Row>

          </TabPane>
        </Tabs>
      </Row>
      <Modal
        title="Error"
        visible={!!error}
        onOk={handleModalClose}
        onCancel={handleModalClose}
      >
        <pre>{error}</pre>
      </Modal>
    </div>
    
  );
};

export default Admin;
