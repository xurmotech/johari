import React from 'react';
import { Form, Row, Col, Button, Typography } from 'antd';
import './upload.css';
import MonthDropdown from '../../components/common/dropdowns/monthselect';
import CountryDropdown from '../../components/common/dropdowns/countryselect';

const { Title } = Typography;

const Upload = () => {
  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === 'application/vnd.ms-excel' || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) {
      console.log('Upload Success:', file);
      // Perform further processing with the uploaded file
    } else {
      console.log('Invalid file format. Please upload an Excel file.');
    }
  };

  const handleValidation = () => {
    console.log('Validation');
  };

  const handleSubmission = () => {
    console.log('Submission');
  };

  return (
    <div className="upload-container">
      <Title level={4} className="title">Consolidated Townwise for HO</Title>
      <div className="step-container">
        <Form>
          <Form.Item label="Step 1:">
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={6}>
                <Button
                  onClick={() => { document.getElementById('file-input').click(); }}
                  className="upload-button"
                >
                  Upload
                </Button>
                <input id="file-input" type="file" accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" style={{ display: 'none' }} onChange={handleUpload} />
              </Col>
              <Col xs={24} sm={12} md={6}>
                <MonthDropdown />
              </Col>
              <Col xs={24} sm={12} md={6}>
                <CountryDropdown name="area" label="Area" rules={[{ required: true, message: 'Please select an area' }]} />
              </Col>
              <Col xs={24} sm={12} md={6} className="help-container">
                <div>
                  <span className="help-text">Help:
                    <Button
                      onClick={() => { console.log('Download Template'); }}
                      className="help-button"
                    >
                      Download Template
                    </Button>
                  </span>
                </div>
                <div className="last-updated">
                  <span>Last updated: Dec 2023</span>
                </div>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </div>
      <div className="step-container">
        <Form>
          <Form.Item label="Step 2">
            <Button
              onClick={handleValidation}
              disabled
            >
              Validate
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="step-container">
        <Form>
          <Form.Item label="Step 3">
            <Button
              onClick={handleSubmission}
              disabled
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Upload;
