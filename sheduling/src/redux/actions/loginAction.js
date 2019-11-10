import axios from 'axios';

export function loginAction(data){
  return dispatch => {
    return axios.post('/login', data);
  }
}