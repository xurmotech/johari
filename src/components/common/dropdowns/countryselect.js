import React from 'react';
import { Form, Select } from 'antd';

const { Option } = Select;

const CountryDropdown = ({ name, label, rules }) => (
  <Form.Item name={name} label={label} rules={rules}>
    <Select placeholder="Select an area">
      <Option value="India">IND</Option>
    </Select>
  </Form.Item>
);

export default CountryDropdown;