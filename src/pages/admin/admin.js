import React from 'react';
import { Tabs, Row, Col, Table, Select, Button, Input, Radio, Form } from 'antd';
import './admin.css';

const { TabPane } = Tabs;
const { Option } = Select;

const Admin = () => {
  const handleDownload = (type) => {
    console.log(`Download ${type}`);
  };

  const handleUploadAndUpdate = (type) => {
    console.log(`Upload and Update ${type}`);
  };

  return (
    <div className="tabs-container">
      <Row>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Settings" key="1">
            <div className="settings-container">
              <div className="settings-section">
                <div className="section-title">Location Master:</div>
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
                </div>
                <div className="last-updated">Last Updated On: 05-Dec-23</div>
              </div>

              <div className="settings-section">
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
                </div>
                <div className="last-updated">Last Updated On: 06-Mar-24</div>
              </div>

              <div className="settings-section">
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
                </div>
                <div className="last-updated">Last Updated On: 07-May-24</div>
              </div>

              <div className="settings-section">
                <Form layout="inline">
                  <Form.Item label="Disable File Upload for MIS Users:">
                    <Radio.Group defaultValue="enableNow">
                      <Radio value="autoDisable">Auto disable every month on</Radio>
                      <Input placeholder="1" style={{ width: 40, marginLeft: 10 }} />
                      <Radio value="enableNow" style={{ marginLeft: 10 }}>Enable Now</Radio>
                      <Radio value="disableNow" style={{ marginLeft: 10 }}>Disable Now</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Form>
              </div>

              <div className="settings-section threshold-inputs">
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
                        <Col span={16}>
                            <Table
                                columns={[
                                    {
                                        title: 'Email Id',
                                        dataIndex: 'email',
                                        key: 'email',
                                    },
                                    {
                                        title: 'User Role',
                                        dataIndex: 'role',
                                        key: 'role',
                                    },
                                    {
                                        title: 'Area',
                                        dataIndex: 'area',
                                        key: 'area',
                                    },
                                    {
                                        title: 'Date Added',
                                        dataIndex: 'dateAdded',
                                        key: 'dateAdded',
                                    },
                                ]}
                                dataSource={[]}
                                pagination={{ pageSize: 10 }}
                            />
                        </Col>
                        <Col span={8}>
                            <div className="add-user-form">
                                <h3>Add / Modify Users</h3>
                                <Input placeholder="Email" style={{ marginBottom: '16px' }} />
                                <Select placeholder="Select Role" style={{ width: '100%', marginBottom: '16px' }}>
                                    <Option value="HO User">HO User</Option>
                                    <Option value="MIS User">MIS User</Option>
                                    <Option value="Admin">Admin</Option>
                                </Select>
                                <Select placeholder="Area" style={{ width: '100%', marginBottom: '16px' }}>
                                    <Option value="AP">AP</Option>
                                    <Option value="BIH">BIH</Option>
                                    <Option value="CHT">CHT</Option>
                                    {/* Add more options as needed */}
                                </Select>
                                <Button type="primary" style={{ width: '100%' }}>Add</Button>
                            </div>
                        </Col>
                    </Row>
          </TabPane>
          <TabPane tab="Usage Logs" key="3">
            <div>Usage Logs Content</div>
          </TabPane>
          <TabPane tab="Manage Locations" key="4">
            <div>Manage Locations Content</div>
          </TabPane>
        </Tabs>
      </Row>
    </div>
  );
};

export default Admin;

