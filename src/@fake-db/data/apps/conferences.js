import mock from '@/@fake-db/mock'
/* eslint-disable global-require */
const data = {
  tableBasic: [
    {
      id: 1,
      subject: '[Subject]',
      start: '[Start]',
      end: '[End]',
      status: 'Pending',
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    },
    {
      id: 2,
      subject: '[Subject]',
      start: '[Start]',
      end: '[End]',
      status: 'Rejected',
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    },
    {
      id: 3,
      subject: '[Subject]',
      start: '[Start]',
      end: '[End]',
      status: 'Approved',
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    },
    {
      id: 4,
      subject: '[Subject]',
      start: '[Start]',
      end: '[End]',
      status: 'Finished',
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    },
    {
      id: 5,
      subject: '[Subject]',
      start: '[Start]',
      end: '[End]',
      status: 'Pending',
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    },
    {
      id: 6,
      subject: '[Subject]',
      start: '[Start]',
      end: '[End]',
      status: 'Pending',
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    },
    {
      id: 7,
      subject: '[Subject]',
      start: '[Start]',
      end: '[End]',
      status: 'Pending',
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    },
    {
      id: 8,
      subject: '[Subject]',
      start: '[Start]',
      end: '[End]',
      status: 'Pending',
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    },
    {
      id: 9,
      subject: '[Subject]',
      start: '[Start]',
      end: '[End]',
      status: 'Pending',
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    },
    {
      id: 10,
      subject: '[Subject]',
      start: '[Start]',
      end: '[End]',
      status: 'Pending',
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    },
  ],
  /* eslint-disable global-require */
}

mock.onGet('/conference-table/basic').reply(() => [200, data.tableBasic])
