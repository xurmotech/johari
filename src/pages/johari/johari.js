import React, { useState, useEffect } from 'react';
import { Table, Row, Col, Form } from 'antd';
import moment from 'moment';
import MonthDropdown from '../../components/common/dropdowns/monthselect';
import './johari.css';
import CountryDropdown from '../../components/common/dropdowns/countryselect';

const top_columns = [
        {
                title: 'Country Column',
                dataIndex: 'country',
                key: 'countrycol',
              },
        {
          title: 'Column 1',
          dataIndex: 'col1',
          key: 'col1',
          className: 'ind-column',
        },
        {
          title: 'Column 2',
          dataIndex: 'col2',
          key: 'col2',
          className: 'tvs-column',
        },
        {
          title: 'Column 3',
          dataIndex: 'col3',
          key: 'col3',
          className: 'ms-column',
        },
        {
                title: 'Column 4',
                dataIndex: 'col4',
                key: 'col4',
                className: 'ind-column',
              },
              {
                title: 'Column 5',
                dataIndex: 'col5',
                key: 'col5',
                className: 'tvs-column',
              },
              {
                title: 'Column 6',
                dataIndex: 'col6',
                key: 'col6',
                className: 'ms-column',
              },
      ];
const country_data = [
        {
          key: '1',
          country: 'India',
          col1: 'Data 1',
          col2: 'Data 2',
          col3: 'Data 3',
          col4: 'Data 4', 
          col5: 'Data 5',
          col6: 'Data 6',
        },
      ];

      const initialColumns = [
        {
          title: 'Low',
          children: [
            {
              title: '< 8%',
              children: [
                {
                  title: 'Town',
                  dataIndex: 'low_town',
                  key: 'low_town',
                  width: 150,
                },
                {
                  title: '22-23',
                  children: [
                    {
                      title: 'IND',
                      dataIndex: 'low_22_23_ind',
                      key: 'low_22_23_ind',
                      width: 100,
                      className: 'ind-column',
                    },
                    {
                      title: 'TVS',
                      dataIndex: 'low_22_23_tvs',
                      key: 'low_22_23_tvs',
                      width: 100,
                      className: 'tvs-column',
                    },
                    {
                      title: 'MS%',
                      dataIndex: 'low_22_23_ms',
                      key: 'low_22_23_ms',
                      width: 100,
                      className: 'ms-column',
                    },
                  ],
                },
                {
                  title: '', // This will be dynamic based on the selected month
                  children: [
                    {
                      title: 'IND',
                      dataIndex: 'low_dynamic_ind',
                      key: 'low_dynamic_ind',
                      width: 100,
                      className: 'ind-column',
                    },
                    {
                      title: 'TVS',
                      dataIndex: 'low_dynamic_tvs',
                      key: 'low_dynamic_tvs',
                      width: 100,
                      className: 'tvs-column',
                    },
                    {
                      title: 'MS%',
                      dataIndex: 'low_dynamic_ms',
                      key: 'low_dynamic_ms',
                      width: 100,
                      className: 'ms-column',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: 'Medium',
          children: [
            {
              title: '8% to 10%',
              children: [
                {
                  title: 'Town',
                  dataIndex: 'medium_town',
                  key: 'medium_town',
                  width: 150,
                },
                {
                  title: '22-23',
                  children: [
                    {
                      title: 'IND',
                      dataIndex: 'medium_22_23_ind',
                      key: 'medium_22_23_ind',
                      width: 100,
                      className: 'ind-column',
                    },
                    {
                      title: 'TVS',
                      dataIndex: 'medium_22_23_tvs',
                      key: 'medium_22_23_tvs',
                      width: 100,
                      className: 'tvs-column',
                    },
                    {
                      title: 'MS%',
                      dataIndex: 'medium_22_23_ms',
                      key: 'medium_22_23_ms',
                      width: 100,
                      className: 'ms-column',
                    },
                  ],
                },
                {
                  title: '', // This will be dynamic based on the selected month
                  children: [
                    {
                      title: 'IND',
                      dataIndex: 'medium_dynamic_ind',
                      key: 'medium_dynamic_ind',
                      width: 100,
                      className: 'ind-column',
                    },
                    {
                      title: 'TVS',
                      dataIndex: 'medium_dynamic_tvs',
                      key: 'medium_dynamic_tvs',
                      width: 100,
                      className: 'tvs-column',
                    },
                    {
                      title: 'MS%',
                      dataIndex: 'medium_dynamic_ms',
                      key: 'medium_dynamic_ms',
                      width: 100,
                      className: 'ms-column',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: 'High',
          children: [
            {
              title: '> 10%',
              children: [
                {
                  title: 'Town',
                  dataIndex: 'high_town',
                  key: 'high_town',
                  width: 150,
                },
                {
                  title: '22-23',
                  children: [
                    {
                      title: 'IND',
                      dataIndex: 'high_22_23_ind',
                      key: 'high_22_23_ind',
                      width: 100,
                      className: 'ind-column',
                    },
                    {
                      title: 'TVS',
                      dataIndex: 'high_22_23_tvs',
                      key: 'high_22_23_tvs',
                      width: 100,
                      className: 'tvs-column',
                    },
                    {
                      title: 'MS%',
                      dataIndex: 'high_22_23_ms',
                      key: 'high_22_23_ms',
                      width: 100,
                      className: 'ms-column',
                    },
                  ],
                },
                {
                  title: '', // This will be dynamic based on the selected month
                  children: [
                    {
                      title: 'IND',
                      dataIndex: 'high_dynamic_ind',
                      key: 'high_dynamic_ind',
                      width: 100,
                      className: 'ind-column',
                    },
                    {
                      title: 'TVS',
                      dataIndex: 'high_dynamic_tvs',
                      key: 'high_dynamic_tvs',
                      width: 100,
                      className: 'tvs-column',
                    },
                    {
                      title: 'MS%',
                      dataIndex: 'high_dynamic_ms',
                      key: 'high_dynamic_ms',
                      width: 100,
                      className: 'ms-column',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ];
      

const data = [
  {
    key: '1',
    low_town: 'ANTIOQUIA',
    low_22_23_ind: 9660,
    low_22_23_tvs: 751,
    low_22_23_ms: '7.8%',
    low_feb_24_ind: 10455,
    low_feb_24_tvs: 771,
    low_feb_24_ms: '7.4%',
    // Add more data for other months
  },
  // Add more data rows here
];

const getPreviousMonth = () => {
  return moment().subtract(1, 'months').format("MMM'YY");
};

const JohariTab = () => {
  const defaultMonth = getPreviousMonth();
  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);
  const [columns, setColumns] = useState(initialColumns);

  const handleMonthChange = (date, dateString) => {
    if (dateString) {
      const newMonth = moment(dateString, 'YYYY-MM').format("MMM'YY");
      setSelectedMonth(newMonth);
    }
  };

  useEffect(() => {
        const year = parseInt(selectedMonth.split("'")[1], 10);
        const previousYear = `${year - 2}-${year - 1}`;
    
        const updatedColumns = initialColumns.map(column => ({
          ...column,
          children: column.children.map(subcolumn => {
            if (subcolumn.title === '22-23') {
              return {
                ...subcolumn,
                title: previousYear,
              };
            }
            if (subcolumn.title === "" || subcolumn.title.includes("'")) {
              return {
                ...subcolumn,
                title: selectedMonth,
                children: subcolumn.children.map(subsubcolumn => ({
                  ...subsubcolumn,
                  key: subsubcolumn.key.replace('dynamic', selectedMonth.toLowerCase().replace('\'', '_')),
                  dataIndex: subsubcolumn.key.replace('dynamic', selectedMonth.toLowerCase().replace('\'', '_')),
                })),
              };
            }
            return subcolumn;
          }),
        }));
    
        setColumns(updatedColumns);
        }, [selectedMonth]);

return (
        <div style={{ padding: '20px' }}>
                <Row justify="space-between" align="middle" className='country-row'>
                        <Col span={12}>
                                <h3 style={{ textAlign: 'left' }}>
                                Townwise Industry
                                </h3>
                        </Col>
                        <Col span={12}>
                                <h2 style={{ textAlign: 'right' }}>
                                India
                                </h2>
                        </Col>
                </Row>
                <Col span={6}>
                        <CountryDropdown />
                </Col>
                <Row justify="center">
                        <Col>
                                <div className="month-header" style={{ textAlign: 'center' }}>
                                        {selectedMonth}
                                </div>
                        </Col>
                </Row>
                <Row justify="center" style={{ marginBottom: '20px' }}>
                        <Col>
                                <Form>
                                        <MonthDropdown onMonthChange={handleMonthChange} />
                                </Form>
                        </Col>
                </Row>
                < Row justify = "center" > 
                        <Table
                                                className='top-row'
                                                columns={top_columns}
                                                dataSource={country_data}
                                                pagination={false}
                                                scroll={{ x: '100%' }}
                                                bordered
                                        />
                </Row>
                <Row justify="center">
                        <Col>
                                <Table
                                        columns={columns}
                                        dataSource={data}
                                        pagination={false}
                                        scroll={{ x: '100%' }}
                                        bordered
                                        className="johari-table"
                                />
                        </Col>
                </Row>
        </div>
);
};

export default JohariTab;

