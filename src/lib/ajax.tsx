import axios from 'axios'

axios.defaults.baseURL = isDev ? '/' : 'http://121.196.236.94:8080'
export const ajax = {
  get: (path: string) => {
    return axios.get(path)
  },
  post: () => {},
  put: () => {},
  delete: () => {},
}
