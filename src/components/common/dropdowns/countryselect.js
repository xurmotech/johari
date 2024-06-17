import React from 'react';
import { Form, Select } from 'antd';

const { Option, OptGroup } = Select;
const CountryDropdown = ({ name, label, rules }) => (
  <Form.Item name={name} label={label} rules={rules}>
    <Select placeholder="Select a country">
      <OptGroup label="Asia">
        <Option value="India">India</Option>
        <Option value="China">China</Option>
        <Option value="Japan">Japan</Option>
      </OptGroup>
      <OptGroup label="Europe">
        <Option value="Germany">Germany</Option>
        <Option value="France">France</Option>
        <Option value="Italy">Italy</Option>
      </OptGroup>
      <OptGroup label="North America">
        <Option value="United States">United States</Option>
        <Option value="Canada">Canada</Option>
        <Option value="Mexico">Mexico</Option>
      </OptGroup>
      <OptGroup label="South America">
        <Option value="Brazil">Brazil</Option>
        <Option value="Argentina">Argentina</Option>
        <Option value="Chile">Chile</Option>
      </OptGroup>
      <OptGroup label="Africa">
        <Option value="Nigeria">Nigeria</Option>
        <Option value="Egypt">Egypt</Option>
        <Option value="South Africa">South Africa</Option>
      </OptGroup>
      <OptGroup label="Oceania">
        <Option value="Australia">Australia</Option>
        <Option value="New Zealand">New Zealand</Option>
        <Option value="Fiji">Fiji</Option>
      </OptGroup>
    </Select>
  </Form.Item>
);

export default CountryDropdown;