import axios from "axios";

const host = "http://localhost:3000/login";
const tasksUrl = "http://localhost:3000/tasks";

const API = {
  login: (phone, pass, success) => {
    return axios.post(host, { phone: phone, password: pass }).then(res => {
      localStorage.setItem('token', res.data.accessToken)
      return res.data;
    })
  },
  getTasks: ()=> {
    const token = localStorage.getItem('token');
    return axios.get(tasksUrl, {headers:{
      authorization: `Bearer ${token}`
    }}).then(res=>{
      return res.data;
    }).catch(error=>{
      console.log(error);
    }
    )
  }
  
}


export default API;
