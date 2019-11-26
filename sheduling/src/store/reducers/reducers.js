const defaultState = {
  user: {},
  token: null,
  tasks: []
};

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        token: action.payload.token
      };
    case "GETTASKS":
      return {
        ...state,
        tasks: action.payload
      };

    default:
      return state;
  }
};

export default auth;
