import axios from 'axios'

export default ({ app }) => {
  app.provide('axios', axios)
  axios.defaults.baseURL = 'https://api.github.com'
}
