import API from "../../utils/api";

export const login = (phone, password) => {
  return dispatch => {
    API.login(phone, password, res => {
      return {
        type: "LOGIN",
        payload: {
          phone,
          password
        }
      };
    });
  };
};

export const tasks = tasks => {
  return {
    type: "TASKS",
    payload: tasks
  };
};
