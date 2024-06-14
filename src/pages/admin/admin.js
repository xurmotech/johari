import React, { useState, useEffect } from 'react';
import { Tabs, Row, Col, Table, Select, Button, Input, Radio, InputNumber , Form } from 'antd';
import './admin.css';

const { TabPane } = Tabs;
const { Option } = Select;

const Admin = () => {
  const [form] = Form.useForm();
  const initialData = [
    { key: 1, email: 'john.doe@example.com', role: 'Admin', country: 'USA', dateAdded: '2022-01-01' },
    { key: 2, email: 'jane.smith@example.com', role: 'User', country: 'Canada', dateAdded: '2022-02-15' },
    { key: 3, email: 'sam.jones@example.com', role: 'Moderator', country: 'UK', dateAdded: '2022-03-10' },
    { key: 4, email: 'alice.wang@example.com', role: 'User', country: 'China', dateAdded: '2022-04-22' },
    // Add more sample data as needed
  ];


  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);

  // Search handler
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();;
    setSearchText(value);
    const filtered = initialData.filter(item =>
      item.email.toLowerCase().includes(value) ||
      item.role.toLowerCase().includes(value) ||
      item.country.toLowerCase().includes(value) ||
      item.dateAdded.toLowerCase().includes(value) ||
      ''
    );
    setFilteredData(filtered);
  };

  
  const handleDownload = (type) => {
    console.log(`Download ${type}`);
  };

  const handleUploadAndUpdate = (type) => {
    console.log(`Upload and Update ${type}`);
  };

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div className="tabs-container">
      <Row>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Settings" key="1">
            <div className="settings-container">
              <div className="settings-section">
                <div className="section-title">Location Master: </div>
                  <div className="button-group">
                    <Button
                      className="download-button"
                      onClick={() => handleDownload('Location Master')}
                    >
                      Download
                    </Button>
                    <Button
                      className="upload-update-button"
                      onClick={() => handleUploadAndUpdate('Location Master')}
                    >
                      Upload & Update
                    </Button>
                    <span> Last Updated On: 05-Dec-23 </span>
                </div>
                
                
              
                <div className="section-title">Product Master:</div>
                <div className="button-group">
                  <Button
                    className="download-button"
                    onClick={() => handleDownload('Product Master')}
                  >
                    Download
                  </Button>
                  <Button
                    className="upload-update-button"
                    onClick={() => handleUploadAndUpdate('Product Master')}
                  >
                    Upload & Update
                  </Button>
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
                  dataSource={filteredData}
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
          <Row gutter={16}>
              <Col xs={24} md={24}>
                <Table
                  className="custom-table-header"
                  columns={[
                    { title: 'User', dataIndex: 'user', key: 'user', width: 200 },
                    { title: 'Action', dataIndex: 'action', key: 'action', width: 150 },
                    { title: 'Date', dataIndex: 'date', key: 'date', width: 150 },
                    { title: 'Details', dataIndex: 'details', key: 'details', width: 300 },
                  ]}
                  dataSource={[]}
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
    </div>
  );
};

export default Admin;
