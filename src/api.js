import axios from 'axios'

const getUrl = url => window.location.origin + `/.netlify/functions` + url

export default {
  order: data => axios.post(getUrl('/order'), data)
}
