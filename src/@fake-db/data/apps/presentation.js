import mock from '@/@fake-db/mock'
// eslint-disable-next-line camelcase
import presentation_formats from '@/@fake-db/data/json/presentation_formats'
import countries from '@/@fake-db/data/json/countries'
/* eslint-disable global-require */
const data = {
  tableBasic: [
    {
      id: 1,
      presentation_date: '25/11/2021 8:30',
      presentation_title: 'Id dapibus urna scelerisque',
      presentation_format: presentation_formats[0].text,
      title_and_name: 'Sed nec accumsan ligula',
      short_title_and_name: 'Sed nec',
      presenter_email: 'presenter-email@test.com',
      presentation_email: 'event-email@test.com',
      presentation_phone: '+855 884 556',
      organization: 'Donec sollicitudin',
      country: countries[0].name,
      presenter_position: 'Developer',
      abstract: 'Aliquam sollicitudin diam aliquam lacus pharetra, id dapibus urna scelerisque.',
      keywords: ['Maecenas', 'Pretium', 'Purus', 'Vivamus', 'Tempor', 'Tristique'],
      post_date: '12/10/2021 8:30',
      author: 'Admin',
    },
    {
      id: 2,
      presentation_date: '25/11/2021 8:30',
      presentation_title: 'Id dapibus urna scelerisque',
      presentation_format: presentation_formats[0].text,
      title_and_name: 'Sed nec accumsan ligula',
      short_title_and_name: 'Sed nec',
      presenter_email: 'presenter-email@test.com',
      presentation_email: 'event-email@test.com',
      presentation_phone: '+855 884 556',
      organization: 'Donec sollicitudin',
      country: countries[0].name,
      presenter_position: 'Developer',
      abstract: 'Aliquam sollicitudin diam aliquam lacus pharetra, id dapibus urna scelerisque.',
      keywords: ['Maecenas', 'Pretium', 'Purus', 'Vivamus', 'Tempor', 'Tristique'],
      post_date: '12/10/2021 8:30',
      author: 'Admin',
    },
    {
      id: 3,
      presentation_date: '25/11/2021 8:30',
      presentation_title: 'Id dapibus urna scelerisque',
      presentation_format: presentation_formats[0].text,
      title_and_name: 'Sed nec accumsan ligula',
      short_title_and_name: 'Sed nec',
      presenter_email: 'presenter-email@test.com',
      presentation_email: 'event-email@test.com',
      presentation_phone: '+855 884 556',
      organization: 'Donec sollicitudin',
      country: countries[0].name,
      presenter_position: 'Developer',
      abstract: 'Aliquam sollicitudin diam aliquam lacus pharetra, id dapibus urna scelerisque.',
      keywords: ['Maecenas', 'Pretium', 'Purus', 'Vivamus', 'Tempor', 'Tristique'],
      post_date: '12/10/2021 8:30',
      author: 'Admin',
    },
    {
      id: 4,
      presentation_date: '25/11/2021 8:30',
      presentation_title: 'Id dapibus urna scelerisque',
      presentation_format: presentation_formats[0].text,
      title_and_name: 'Sed nec accumsan ligula',
      short_title_and_name: 'Sed nec',
      presenter_email: 'presenter-email@test.com',
      presentation_email: 'event-email@test.com',
      presentation_phone: '+855 884 556',
      organization: 'Donec sollicitudin',
      country: countries[0].name,
      presenter_position: 'Developer',
      abstract: 'Aliquam sollicitudin diam aliquam lacus pharetra, id dapibus urna scelerisque.',
      keywords: ['Maecenas', 'Pretium', 'Purus', 'Vivamus', 'Tempor', 'Tristique'],
      post_date: '12/10/2021 8:30',
      author: 'Admin',
    },
    {
      id: 5,
      presentation_date: '25/11/2021 8:30',
      presentation_title: 'Id dapibus urna scelerisque',
      presentation_format: presentation_formats[0].text,
      title_and_name: 'Sed nec accumsan ligula',
      short_title_and_name: 'Sed nec',
      presenter_email: 'presenter-email@test.com',
      presentation_email: 'event-email@test.com',
      presentation_phone: '+855 884 556',
      organization: 'Donec sollicitudin',
      country: countries[0].name,
      presenter_position: 'Developer',
      abstract: 'Aliquam sollicitudin diam aliquam lacus pharetra, id dapibus urna scelerisque.',
      keywords: ['Maecenas', 'Pretium', 'Purus', 'Vivamus', 'Tempor', 'Tristique'],
      post_date: '12/10/2021 8:30',
      author: 'Admin',
    },
    {
      id: 6,
      presentation_date: '25/11/2021 8:30',
      presentation_title: 'Id dapibus urna scelerisque',
      presentation_format: presentation_formats[0].text,
      title_and_name: 'Sed nec accumsan ligula',
      short_title_and_name: 'Sed nec',
      presenter_email: 'presenter-email@test.com',
      presentation_email: 'event-email@test.com',
      presentation_phone: '+855 884 556',
      organization: 'Donec sollicitudin',
      country: countries[0].name,
      presenter_position: 'Developer',
      abstract: 'Aliquam sollicitudin diam aliquam lacus pharetra, id dapibus urna scelerisque.',
      keywords: ['Maecenas', 'Pretium', 'Purus', 'Vivamus', 'Tempor', 'Tristique'],
      post_date: '12/10/2021 8:30',
      author: 'Admin',
    },
    {
      id: 7,
      presentation_date: '25/11/2021 8:30',
      presentation_title: 'Id dapibus urna scelerisque',
      presentation_format: presentation_formats[0].text,
      title_and_name: 'Sed nec accumsan ligula',
      short_title_and_name: 'Sed nec',
      presenter_email: 'presenter-email@test.com',
      presentation_email: 'event-email@test.com',
      presentation_phone: '+855 884 556',
      organization: 'Donec sollicitudin',
      country: countries[0].name,
      presenter_position: 'Developer',
      abstract: 'Aliquam sollicitudin diam aliquam lacus pharetra, id dapibus urna scelerisque.',
      keywords: ['Maecenas', 'Pretium', 'Purus', 'Vivamus', 'Tempor', 'Tristique'],
      post_date: '12/10/2021 8:30',
      author: 'Admin',
    },
    {
      id: 8,
      presentation_date: '25/11/2021 8:30',
      presentation_title: 'Id dapibus urna scelerisque',
      presentation_format: presentation_formats[0].text,
      title_and_name: 'Sed nec accumsan ligula',
      short_title_and_name: 'Sed nec',
      presenter_email: 'presenter-email@test.com',
      presentation_email: 'event-email@test.com',
      presentation_phone: '+855 884 556',
      organization: 'Donec sollicitudin',
      country: countries[0].name,
      presenter_position: 'Developer',
      abstract: 'Aliquam sollicitudin diam aliquam lacus pharetra, id dapibus urna scelerisque.',
      keywords: ['Maecenas', 'Pretium', 'Purus', 'Vivamus', 'Tempor', 'Tristique'],
      post_date: '12/10/2021 8:30',
      author: 'Admin',
    },
  ],
}

mock.onGet('/presentation/approved').reply(() => [200, data.tableBasic])
mock.onGet('/presentation/finished').reply(() => [200, data.tableBasic])
mock.onGet('/presentation/pending').reply(() => [200, data.tableBasic])
mock.onGet('/presentation/rejected').reply(() => [200, data.tableBasic])
