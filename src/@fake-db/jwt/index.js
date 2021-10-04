import jwt from 'jsonwebtoken'
import mock from '@/@fake-db/mock'
import roles from '@/@fake-db/data/json/roles'

const abilities = {}

const roles_keys = Object.keys(roles)

for (let l1 = 0; l1 < roles_keys.length; l1++) {
  const role_key = roles_keys[l1]
  const role_value = roles[role_key]

  Object.assign(abilities, { [role_key]: {} })

  const permissions = []
  for (let l2 = 0; l2 < role_value.length; l2++) {
    const { subject } = role_value[l2]
    const { actions } = role_value[l2]

    // console.log('role_value[l2] ', role_value[l2])
    // console.log('actions ', actions)

    for (let l3 = 0; l3 < actions.length; l3++) {
      const action = actions[l3]
      const permission = { subject, action }
      permissions.push(permission)
    }
  }
  abilities[role_key] = permissions
}

const data = {
  users: [
    {
      id: 1,
      fullName: 'System Admin',
      username: 'system_admin',
      password: '4dmi5',
      // eslint-disable-next-line global-require
      avatar: require('@/assets/images/avatars/13-small.png'),
      email: 'system_admin@demo.com',
      role: 'SystemAdmin',
      ability: abilities.SystemAdmin,
      extras: {
        eCommerceCartItemsCount: 5,
      },
    },
    {
      id: 2,
      fullName: 'Admin',
      username: 'admin',
      password: 'admin',
      // eslint-disable-next-line global-require
      avatar: require('@/assets/images/avatars/13-small.png'),
      email: 'admin@demo.com',
      role: 'Admin',
      ability: abilities.Admin,
      extras: {
        eCommerceCartItemsCount: 5,
      },
    },
    {
      id: 3,
      fullName: 'Sam Presenter',
      username: 'sam_presenter',
      password: '4dmi5',
      // eslint-disable-next-line global-require
      avatar: require('@/assets/images/avatars/1-small.png'),
      email: 'sam_presenter@demo.com',
      role: 'Presenter',
      ability: abilities.Presenter,
      extras: {
        eCommerceCartItemsCount: 5,
      },
    },
    {
      id: 4,
      fullName: 'Sam Approved',
      username: 'sam_approved_user',
      password: '4dmi5',
      // eslint-disable-next-line global-require
      avatar: require('@/assets/images/avatars/1-small.png'),
      email: 'sam_approved_user@demo.com',
      role: 'Approved',
      ability: abilities.Approved,
      extras: {
        eCommerceCartItemsCount: 5,
      },
    },
  ],
}

console.log('Local users ', data)

// ! These two secrets shall be in .env file and not in any other file
const jwtConfig = {
  secret: 'dd5f3089-40c3-403d-af14-d0c228b05cb4',
  refreshTokenSecret: '7c4c1c50-3230-45bf-9eae-c9b2e401c767',
  expireTime: '10m',
  refreshTokenExpireTime: '10m',
}

mock.onPost('/jwt/login').reply(request => {
  const { email, password } = JSON.parse(request.data)

  let error = {
    email: ['Something went wrong'],
  }

  const user = data.users.find(u => u.email === email && u.password === password)

  if (user) {
    try {
      const accessToken = jwt.sign({ id: user.id }, jwtConfig.secret, { expiresIn: jwtConfig.expireTime })
      const refreshToken = jwt.sign({ id: user.id }, jwtConfig.refreshTokenSecret, {
        expiresIn: jwtConfig.refreshTokenExpireTime,
      })

      const userData = { ...user }

      delete userData.password

      const response = {
        userData,
        accessToken,
        refreshToken,
      }

      return [200, response]
    } catch (e) {
      error = e
    }
  } else {
    error = {
      email: ['Email or Password is Invalid'],
    }
  }

  return [400, { error }]
})

mock.onPost('/jwt/register').reply(request => {
  const { username, email, password } = JSON.parse(request.data)

  // If not any of data is missing return 400
  if (!(username && email && password)) return [400]

  const isEmailAlreadyInUse = data.users.find(user => user.email === email)
  const isUsernameAlreadyInUse = data.users.find(user => user.username === username)

  const error = {
    password: !password ? ['Please enter password'] : null,
    email: (() => {
      if (!email) return ['Please enter your email.']
      if (isEmailAlreadyInUse) return ['This email is already in use.']
      return null
    })(),
    username: (() => {
      if (!username) return ['Please enter your username.']
      if (isUsernameAlreadyInUse) return ['This username is already in use.']
      return null
    })(),
  }

  if (!error.username && !error.email) {
    const userData = {
      email,
      password,
      username,
      fullName: '',
      avatar: null,
      role: 'admin',
      ability: [
        {
          action: 'manage',
          subject: 'all',
        },
      ],
    }

    // Add user id
    const { length } = data.users
    let lastIndex = 0
    if (length) {
      lastIndex = data.users[length - 1].id
    }
    userData.id = lastIndex + 1

    data.users.push(userData)

    const accessToken = jwt.sign({ id: userData.id }, jwtConfig.secret, { expiresIn: jwtConfig.expireTime })

    const user = { ...userData }
    delete user.password
    const response = {
      userData: user,
      accessToken,
    }

    return [200, response]
  }
  return [400, { error }]
})

mock.onPost('/jwt/refresh-token').reply(request => {
  const { refreshToken } = JSON.parse(request.data)

  try {
    const { id } = jwt.verify(refreshToken, jwtConfig.refreshTokenSecret)

    const userData = { ...data.users.find(user => user.id === id) }

    const newAccessToken = jwt.sign({ id: userData.id }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn })
    const newRefreshToken = jwt.sign({ id: userData.id }, jwtConfig.refreshTokenSecret, {
      expiresIn: jwtConfig.refreshTokenExpireTime,
    })

    delete userData.password
    const response = {
      userData,
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    }

    return [200, response]
  } catch (e) {
    const error = 'Invalid refresh token'
    return [401, { error }]
  }
})
