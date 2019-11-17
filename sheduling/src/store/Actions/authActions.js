import API from "../../utils/api";

export const login = (phone, password) => {
  return dispatch => {
    API.login(phone, password).then(data => {
      return dispatch({
        type: "LOGIN",
        payload: {
          phone,
          token: data.accessToken,
          userId: data.userId
        }
      });
    });
  };
};

export const tasks = data => {
  console.log("AuthActions", data);
  return {
    type: "GETTASKS",
    payload: data
  };
};
