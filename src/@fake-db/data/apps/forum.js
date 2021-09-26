import mock from '@/@fake-db/mock'
/* eslint-disable global-require */
const data = {
  tableBasic: [
    {
      id: 1,
      topic: 'This forum topic',
      create_date: '12/10/2021 8:30',
      past_comment: {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        comment_date: '12/10/2021 8:30',
        author: 'Admin',
      },
    }, {
      id: 2,
      topic: 'This forum topic',
      create_date: '12/10/2021 8:30',
      past_comment: {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        comment_date: '12/10/2021 8:30',
        author: 'Admin',
      },
    }, {
      id: 3,
      topic: 'This forum topic',
      create_date: '12/10/2021 8:30',
      past_comment: {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        comment_date: '12/10/2021 8:30',
        author: 'Admin',
      },
    }, {
      id: 4,
      topic: 'This forum topic',
      create_date: '12/10/2021 8:30',
      past_comment: {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        comment_date: '12/10/2021 8:30',
        author: 'Admin',
      },
    }, {
      id: 5,
      topic: 'This forum topic',
      create_date: '12/10/2021 8:30',
      past_comment: {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        comment_date: '12/10/2021 8:30',
        author: 'Admin',
      },
    }, {
      id: 6,
      topic: 'This forum topic',
      create_date: '12/10/2021 8:30',
      past_comment: {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        comment_date: '12/10/2021 8:30',
        author: 'Admin',
      },
    }, {
      id: 7,
      topic: 'This forum topic',
      create_date: '12/10/2021 8:30',
      past_comment: {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        comment_date: '12/10/2021 8:30',
        author: 'Admin',
      },
    }, {
      id: 8,
      topic: 'This forum topic',
      create_date: '12/10/2021 8:30',
      past_comment: {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        comment_date: '12/10/2021 8:30',
        author: 'Admin',
      },
    }, {
      id: 9,
      topic: 'This forum topic',
      create_date: '12/10/2021 8:30',
      past_comment: {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        comment_date: '12/10/2021 8:30',
        author: 'Admin',
      },
    }, {
      id: 10,
      topic: 'This forum topic',
      create_date: '12/10/2021 8:30',
      past_comment: {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        comment_date: '12/10/2021 8:30',
        author: 'Admin',
      },
    }, {
      id: 11,
      topic: 'This forum topic',
      create_date: '12/10/2021 8:30',
      past_comment: {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        comment_date: '12/10/2021 8:30',
        author: 'Admin',
      },
    }, {
      id: 12,
      topic: 'This forum topic',
      create_date: '12/10/2021 8:30',
      past_comment: {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        comment_date: '12/10/2021 8:30',
        author: 'Admin',
      },
    }, {
      id: 13,
      topic: 'This forum topic',
      create_date: '12/10/2021 8:30',
      past_comment: {
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        comment_date: '12/10/2021 8:30',
        author: 'Admin',
      },
    },
  ],
}

mock.onGet('/forum/early').reply(() => [200, data.tableBasic])
mock.onGet('/forum/popular').reply(() => [200, data.tableBasic])
mock.onGet('/forum/closed').reply(() => [200, data.tableBasic])
mock.onGet('/forum/open').reply(() => [200, data.tableBasic])
