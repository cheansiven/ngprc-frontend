import useJwt from '@core/auth/jwt/useJwt'
import Axios from 'axios'
Axios.defaults.baseURL = process.env.VUE_APP_API_URL
const { jwt } = useJwt(Axios, {})
export default jwt
