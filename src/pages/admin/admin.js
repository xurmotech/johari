import React from 'react';
import { Tabs, Row, Col, Table, Select, Button, Input, DatePicker, Radio, Form } from 'antd';
import './admin.css';

const { TabPane } = Tabs;
const { Option } = Select;
const { RangePicker } = DatePicker;

const Admin = () => {
  const [form] = Form.useForm();

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
               

                <div className="section-title">Dealer Master:</div>
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
                </div>
                
              </div>

              <div className="settings-section">
                <Form layout="vertical">
                  <Form.Item label="Disable File Upload for MIS Users:">
                    <Radio.Group defaultValue="enableNow">
                      <Radio value="autoDisable">Auto disable every month on
                      <Input placeholder="1" style={{ width: 40, marginLeft: 10 }} /> </Radio>
                      <Radio value="enableNow" style={{ marginLeft: 10 }}>Enable Now</Radio>
                      <Radio value="disableNow" style={{ marginLeft: 10 }}>Disable Now</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Form>
              
                <Form.Item label="Minimum Threshold:">
                  <Input placeholder="50" />
                </Form.Item>
                <Form.Item label="Variance Threshold (%):">
                  <Input placeholder="200" />
                </Form.Item>
                <Button type="primary">Save</Button>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Manage Users" key="2">
          <Row gutter={16}>
              <Col xs={24} md={18}>
                <div className="table-header">
                  <Form> 
                    <Form.Item label = "Search" > <Input /> </Form.Item>
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
                  dataSource={[]}
                  pagination={{ pageSize: 10 }}
                  scroll={{ x: '100%' }} // Enable horizontal scrolling if necessary
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
                      <Button type="primary" htmlType="submit" className="button">
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
              <Input.Search placeholder="Search User" onSearch={(value) => console.log(value)} enterButton />
            </Col>
            <Col xs={24} md={12} lg={8}>
              <RangePicker
                style={{ width: '100%' }}
                onChange={(dates, dateStrings) => console.log(dates, dateStrings)}
              />
            </Col>
            <Col xs={24} md={12} lg={4}>
              <Button type="primary" block onClick={() => console.log('Filter clicked')}>
                Filter
              </Button>
            </Col>
            <Col xs={24} md={12} lg={4} className="download-button-col">
              <Button type="default" block onClick={() => console.log('Download clicked')}>
                Download
              </Button>
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
                    <Button type="primary" htmlType="submit">Add Town</Button>
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
                    <Button type="primary" htmlType="submit">Add Country</Button>
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
