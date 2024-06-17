import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import * as XLSX from 'xlsx';

const DownloadButton = ({ data, buttonText, style }) => {
  const handleDownload = () => {
    switch (data.fileType) {
      case 'xlsx':
        downloadExcel();
        break;
      case 'csv':
        downloadCSV();
        break;
      // Add cases for other file types if needed
      default:
        console.error('Unsupported file type');
    }
  };

  const downloadExcel = () => {
    const worksheetData = [data.headers, ...data.data];
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, data.fileName);
  };

  const downloadCSV = () => {
    const worksheetData = [data.headers, ...data.data];
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);
    const csvOutput = XLSX.utils.sheet_to_csv(worksheet);
    downloadFile(csvOutput, data.fileName, 'text/csv;charset=utf-8;');
  };

  const downloadFile = (content, fileName, mimeType) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Button type="primary" className="primary-button"  style={style} block onClick={handleDownload}>
      {buttonText} <DownloadOutlined />
    </Button>
  );
};

export default DownloadButton;
