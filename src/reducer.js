const reducer = (state, action) => {
  switch (action.type) {
    case "JOINED":
      return {
        ...state,
        joined: true,
        userName: action.payload.userName,
        roomID: action.payload.roomID,
      };
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "SET_MASSEGES":
      return { ...state, masseges: action.payload };

    default:
      return state;
  }
};
export default reducer;
