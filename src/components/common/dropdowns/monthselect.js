import React from 'react';
import { Form, DatePicker } from 'antd';
import moment from 'moment';

const MonthDropdown = ({ onMonthChange }) => {
  const disabledDate = (current) => {
    // Disable future months
    return current && current > moment().endOf('month');
  };

  return (
    <Form.Item name="month" label="Month" rules={[{ required: true, message: 'Please select a month' }]}>
      <DatePicker picker="month" disabledDate={disabledDate} onChange={onMonthChange}/>
    </Form.Item>
  );
};

export default MonthDropdown;
