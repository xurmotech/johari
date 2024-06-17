// dataMappings.js
export const dataMappings = {
    'Location Master': {
      fileName: 'Location_Master.xlsx',
      fileType : 'xlsx',
      headers: ['Town', 'Country', 'Region'],
      data: [
        ['town1', 'Country 1', 'region 1'],
        ['town2', 'country 2', 'region 2'],
      ],
    },
    'Product Master': {
      fileName: 'Product_Master.xlsx',
      fileType : 'xlsx',
      headers: ['Town', 'Country', 'Region'],
      data: [
        ['town1', 'Country 1', 'region 1'],
        ['town2', 'country 2', 'region 2'],
      ],
    },
    'Download Template': {
        fileName: 'Template.xlsx',
        fileType : 'xlsx',
        headers:  ['Header1', 'Header2', 'Header3'],
        data: [
            [10, 10, 20],
            [50, 30, 40],
        ],
      },
      'Consolidated Townwise data': {
        fileName: 'Townwise_Data.xlsx',
        fileType : 'xlsx',
        headers:  ['Header1', 'Header2', 'Header3'],
        data: [
            [10, 10, 20],
            [50, 30, 40],
        ],
      },
      'Usage': {
        fileName: 'Usage_Data.csv',
        fileType : 'csv',
        headers:  ['Date', 'Time', 'UserName', 'Role', 'Action'],
        data: [
            ['14-Jun-20', '11:01:55', 'Payal', 'HO Admin', 'Downloaded 17122 rows of Townwise data'],
            ['14-Jun-20', '11:01:55', 'Payal', 'HO Admin', 'Downloaded 17122 rows of Townwise data'],
            ['14-Jun-20', '11:01:55', 'Payal', 'HO Admin', 'Downloaded 17122 rows of Townwise data'],
            ['14-Jun-20', '11:01:55', 'Payal', 'HO Admin', 'Downloaded 17122 rows of Townwise data'],
        ],
      },
      'Report': {
        fileName: 'Report_Data.xlsx',
        fileType : 'xlsx',
        headers:  ['Town', 'Country', 'Region'],
        data: [
            ['town1', 'Country 1', 'region 1'],
            ['town2', 'country 2', 'region 2'],
           
        ],
      },
      'Approve': {
        fileName: 'Approved_Data.xlsx',
        fileType : 'xlsx',
        headers:  ['Town', 'Country', 'Region'],
        data: [
            ['town1', 'Country 1', 'region 1'],
            ['town2', 'country 2', 'region 2'],
           
        ],
      },
    
  };
  