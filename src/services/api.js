import axios from 'axios'


const api = axios.create({
  baseURL: 'https://conq-wes.herokuapp.com/'
})

export default api
