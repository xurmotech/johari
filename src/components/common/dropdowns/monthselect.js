import React from 'react';
import { Form, DatePicker } from 'antd';

const MonthDropdown = () => (
   <Form.Item name="month" label="Month" rules={[{ required: true, message: 'Please select a month' }]}>
        <DatePicker picker="month" />
   </Form.Item>
);

export default MonthDropdown;