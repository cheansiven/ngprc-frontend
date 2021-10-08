import mock from '@/@fake-db/mock'

import countries from '@/@fake-db/data/json/countries'

const data = {
  countries,
}

mock.onGet('/countries').reply(() => [200, data.countries])
