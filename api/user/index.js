import axios from 'axios'
import {BASE_API_URL} from '../config'

const API_USER_INFO = '/api/cp/getUserInfo'

export function getUserInfo (token) {
  let url = BASE_API_URL + API_USER_INFO + '?token=' + token
  return axios.get(url).then((res) => {
    return Promise.resolve(res.data)
  })
}
