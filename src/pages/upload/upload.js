import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button, Typography, Modal, Space } from 'antd';
import './upload.css';
import { useAuth } from '../../components/authContext';
import MonthDropdown from '../../components/common/dropdowns/monthselect';
import CountryDropdown from '../../components/common/dropdowns/countryselect';
import * as XLSX from 'xlsx';
import DownloadButton from '../../components/common/downloadButton';
import {dataMappings} from '../../components/common/downloadDataMapping';

const { Title } = Typography;

const Upload = () => {
  const { userRole } = useAuth(); 
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [validationResult, setValidationResult] = useState('');
  const [files, setFiles] = useState([]);

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

  useEffect(() => {
    console.log('Current user role:', userRole);
  }, [userRole]);


  const handleFileSelection = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);    
    console.log("in multiple selection", files)
  };


  const handleValidation = (jsonData) => {
    let isValid = true;
    let errorMessage = '';

    for (const [sheetName, sheetData] of Object.entries(jsonData)) {
      // eslint-disable-next-line no-loop-func
      sheetData.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          if (isNaN(cell) || cell < 0) {
            isValid = false;
            errorMessage += `Invalid data at Sheet: ${sheetName}, Row: ${rowIndex + 1}, Column: ${colIndex + 1}\n`;
            console.log("in sheet", sheetData)
          }
        });
      });
    }

    if (isValid) {
      setValidationResult('Validation Successful');
      console.log('Validation Successful');
    } else {
      setValidationResult('Validation Failed');
      setError(errorMessage);
      console.log('Validation Failed');
    }
  };

  const downloadTemplate = () => {
    const worksheetData = [
      ['Header1', 'Header2', 'Header3'], // Add your headers here
      [0, 0, 0], // Sample data
    ];
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Template');
    XLSX.writeFile(workbook, 'template.xlsx');
  };

  const handleModalClose = () => {
    setError('');
  };

  return (
    <div className="upload-container">
      { userRole === 'a' ? 
       <Title level={4} className="title">Consolidated Townwise for HO</Title>
      :
      <Row>
        <Col xs={24} sm={12} md={8}></Col>
        <Col xs={24} sm={12} md={4}><p>Month : May 24</p></Col>
        <Col xs={24} sm={12} md={4}><p>Area : NE</p></Col>
        <Col xs={24} sm={12} md={8}></Col>
      </Row>
      
  }
     
      <div className="step-container">
      { userRole === 'a' ? 
      <Form>
          <Form.Item>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12} md={6}>
                <Button
                  onClick={() => { document.getElementById('file-input-1').click(); }}
                  className="primary-button"
                >
                  Upload & Submit
                </Button>
                <p className='filename'>{file?.name}</p>
                <input id="file-input-1" type="file" accept=".xlsx, .xls" style={{ display: 'none' }} onChange={handleUpload} />
              </Col>
                <Col xs={24} sm={12} md={6}>
                  <MonthDropdown />
                </Col><Col xs={24} sm={12} md={6}>
                  <CountryDropdown name="area" label="Area" rules={[{ required: true, message: 'Please select an area' }]} />
                </Col>
              <Col xs={24} sm={12} md={6} className="help-container">
                <div>
                  <span className="help-text">Help:
                       <DownloadButton  
                        style={{width:'45%'}}
                        data={dataMappings['Download Template']} // Pass the entire data object
                        buttonText="Download Template"
                      />
                  </span>
                </div>
                <div className="last-updated">
                  <span>Last updated: Dec 2023</span>
                </div>
              </Col>
            </Row>
          </Form.Item>
      </Form>
      :       
      <>
          <div className="step-container">
              <Form label="Step 1:">
                <Form.Item>
                  <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12} md={8}>
                      <Button
                        onClick={() => { document.getElementById('file-input-2').click(); } }
                        className="primary-button"
                      >
                        Upload 1
                      </Button>
                      <input
                        id="file-input-2"
                        type="file"
                        // accept=".xlsx, .xls, .csv"
                        style={{ display: 'none' }}
                        multiple
                        onChange={handleFileSelection} />
                      {files.map((file, index) => (
                        <p key={index} className='filename'>{file.name}</p>
                      ))}
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                      <p>Competition Raw Data</p>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                      <Row><b>Note:</b><Space><p>Upload all Raw files you have</p></Space></Row>
                    </Col>
                  </Row>
                </Form.Item>
              </Form>
          </div>
          <div className="step-container">
            <Form label="Step 2:">
              <Form.Item>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12} md={8}>
                    <Button
                      onClick={() => { document.getElementById('file-input-1').click(); } }
                      className="primary-button"
                    >
                      Upload 2
                    </Button>
                    <p className='filename'>{file?.name}</p>
                    <input id="file-input-1" type="file" accept=".xlsx, .xls" style={{ display: 'none' }} onChange={handleUpload} />
                  </Col>
                  <Col xs={24} sm={12} md={8}>
                      <p>Consolidated Townwise Data</p>
                    </Col>
                <Col xs={24} sm={12} md={8} className="help-container">
                    <div>
                      <span className="help-text">Help:
                       <DownloadButton          
                        style={{width:'45%'}}
                        data={dataMappings['Download Template']} // Pass the entire data object
                        buttonText="Download Template"
                      />
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
          </>
       } 
      </div>
      <div className="step-container">
       
      </div>
     {/*  <div className="step-container">
        <Form>
          <Form.Item label="Step 3">
            <Button
              onClick={handleSubmission}
              disabled={!file || validationResult !== 'Validation Successful'}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div> */}
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

export default Upload;