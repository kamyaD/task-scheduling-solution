import axios from 'axios';

class API {
  static loginUser(data){
    return axios.post('http://localhost:3000/login', data)
  }
}

export default API;