const appApiUrl = '' // process.env.VUE_APP_API_URL

export default {
  // Endpoints
  loginEndpoint: `${appApiUrl}/jwt/login`,
  registerEndpoint: `${appApiUrl}/jwt/register`,
  refreshEndpoint: `${appApiUrl}/jwt/refresh-token`,
  logoutEndpoint: `${appApiUrl}/jwt/logout`,

  // This will be prefixed in authorization header with token
  // e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken',
}
