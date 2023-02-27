export const initialState = {
  users: [],
  loggedIn: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "registration":
      return (state = {
        ...state,
        users: [...state.users, action.payload],
      });

    default:
      return state;
  }
};
