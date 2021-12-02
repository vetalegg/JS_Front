import axios from 'axios'
export default axios.create({
  baseURL: process.env.API_DOMAIN,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
})
