let userState;

if (window.localStorage.getItem("tags")) {
  userState = JSON.parse(window.localStorage.getItem("tags"));
} else {
  userState = null; // {}
}

export const tagReducer = (state = userState, action) => {
  switch (action.type) {
    // case "UPDATED_USER_TAGS":
    //   return { ...state, ...action.payload };
    case "SET_TAGS_TO_NULL":
      return action.payload;
    case "UPDATE_USER_TAGS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
