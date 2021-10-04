import mock from '@/@fake-db/mock'
// eslint-disable-next-line camelcase
import user_roles from '@/@fake-db/data/json/roles'

const data = {
  user_roles,
}

mock.onGet('/user-role')
  .reply(() => [200, data.user_roles])
