import mock from '@/@fake-db/mock'
/* eslint-disable global-require */
const data = {
  tableBasic: [
    {
      id: 1,
      subject: 'Subject of Presentaion',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
      post_date: '12/10/2021 8:30',
      author: 'Admin',
    },
    {
      id: 2,
      subject: 'Subject of Presentaion',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
      post_date: '12/10/2021 8:30',
      author: 'Admin',
    },
    {
      id: 3,
      subject: 'Subject of Presentaion',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
      post_date: '12/10/2021 8:30',
      author: 'Admin',
    },
    {
      id: 4,
      subject: 'Subject of Presentaion',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
      post_date: '12/10/2021 8:30',
      author: 'Admin',
    },
    {
      id: 5,
      subject: 'Subject of Presentaion',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
      post_date: '12/10/2021 8:30',
      author: 'Admin',
    },
    {
      id: 6,
      subject: 'Subject of Presentaion',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
      post_date: '12/10/2021 8:30',
      author: 'Admin',
    },
    {
      id: 7,
      subject: 'Subject of Presentaion',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
      post_date: '12/10/2021 8:30',
      author: 'Admin',
    },
    {
      id: 8,
      subject: 'Subject of Presentaion',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
      post_date: '12/10/2021 8:30',
      author: 'Admin',
    },
    {
      id: 9,
      subject: 'Subject of Presentaion',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
      post_date: '12/10/2021 8:30',
      author: 'Admin',
    },
  ],
}

mock.onGet('/presentation/approved').reply(() => [200, data.tableBasic])
mock.onGet('/presentation/finished').reply(() => [200, data.tableBasic])
mock.onGet('/presentation/pending').reply(() => [200, data.tableBasic])
mock.onGet('/presentation/rejected').reply(() => [200, data.tableBasic])
