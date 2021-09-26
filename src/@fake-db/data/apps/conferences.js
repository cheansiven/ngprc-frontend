import mock from '@/@fake-db/mock'
/* eslint-disable global-require */
const data = {
  tableBasic: [
    {
      id: 1,
      subject: 'Objective of Conference',
      start: '12/10/2021 8:30',
      end: '12/10/2021 10:30',
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    },
    {
      id: 2,
      subject: 'Objective of Conferenc',
      start: '12/10/2021 8:30',
      end: '12/10/2021 10:30',
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    },
    {
      id: 3,
      subject: 'Objective of Conferenc',
      start: '12/10/2021 8:30',
      end: '12/10/2021 10:30',
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    },
    {
      id: 4,
      subject: 'Objective of Conferenc',
      start: '12/10/2021 8:30',
      end: '12/10/2021 10:30',
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    },
    {
      id: 5,
      subject: 'Objective of Conferenc',
      start: '12/10/2021 8:30',
      end: '12/10/2021 10:30',
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    },
    {
      id: 6,
      subject: 'Objective of Conferenc',
      start: '12/10/2021 8:30',
      end: '12/10/2021 10:30',
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    },
    {
      id: 7,
      subject: 'Objective of Conferenc',
      start: '12/10/2021 8:30',
      end: '12/10/2021 10:30',
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    },
    {
      id: 8,
      subject: 'Objective of Conferenc',
      start: '12/10/2021 8:30',
      end: '12/10/2021 10:30',
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    },
    {
      id: 9,
      subject: 'Objective of Conferenc',
      start: '12/10/2021 8:30',
      end: '12/10/2021 10:30',
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    },
    {
      id: 10,
      subject: 'Objective of Conferenc',
      start: '12/10/2021 8:30',
      end: '12/10/2021 10:30',
      extendedProps: {
        calendar: '',
        guests: [],
        location: '',
        description: '',
      },
    },
  ],
}

mock.onGet('/conference/coming_soon').reply(() => [200, data.tableBasic])
mock.onGet('/conference/finished').reply(() => [200, data.tableBasic])
mock.onGet('/conference/top').reply(() => [200, data.tableBasic])
