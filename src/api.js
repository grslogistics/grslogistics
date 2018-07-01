import axios from 'axios'

const api = axios.create({
  baseURL: window.location.origin + `/.netlify/functions`
})

export default {
  order: data => api.post('/order', data)
}
