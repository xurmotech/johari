import React from 'react';
import { Button } from 'antd';

const CustomButton = ({ label, onClick, disabled = false }) => (
  <Button type="default" onClick={onClick} disabled={disabled}>
    {label}
  </Button>
);

export default CustomButton;