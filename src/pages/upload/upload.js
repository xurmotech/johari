import React from 'react';
import { Form, Row, Col, Typography } from 'antd';
import './upload.css';
import MonthDropdown from '../../components/common/dropdowns/monthselect';
import CountryDropdown from '../../components/common/dropdowns/countryselect';
import CustomButton from '../../components/common/button';

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
    <div>
      <Title level={3} className="title">Consolidated Townwise for HO</Title>
        <div className="step-container">
          <Form >
            <Form.Item label="Step 1:">
              <Row gutter = {16}>
                <Col span= {8}>
                <CustomButton
                  label="Upload"
                  onClick={() => { document.getElementById('file-input').click(); }}
                />
                  <input id="file-input" type="file" accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" style={{ display: 'none' }} onChange={handleUpload} />
                </Col>
                <Col span= {8}>
                  <MonthDropdown /> 
                </Col>
                <Col span= {8}>
                  <CountryDropdown name="area" label="Area" rules={[{ required: true, message: 'Please select an area' }]} />
                </Col>
              </Row>
            </Form.Item>  
          </Form>
        </div>
      <div className="step-container">
        <Form>
          <Form.Item label="Step 2">
            <CustomButton
              label="Validate"
              onClick={handleValidation}
              disabled
            />
          </Form.Item>
        </Form>
      </div>
      <div className="step-container">
        <Form.Item label="Step 3">
          <CustomButton
            label="Submit"
            onClick={handleSubmission}
            disabled
          />
        </Form.Item>
      </div>
    </div>
  );
};

export default Upload;