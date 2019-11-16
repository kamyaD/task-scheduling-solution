import axios from "axios";

const host = "http://localhost:3000/login";
const API = {
  login: (phone, pass, success) => {
    axios.post(host, { phone: phone, password: pass }).then(res => {
      success(res);
    });
  }
}

export default API;
