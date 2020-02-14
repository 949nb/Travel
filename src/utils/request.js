import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:9999/api/',
})

request.interceptors.request.use(request => {
  return request
})

request.interceptors.response.use( response => {
  // Do something with response data
  return response.data
},error => {
  // Do something with response error
  return Promise.reject(error)
})

export default request