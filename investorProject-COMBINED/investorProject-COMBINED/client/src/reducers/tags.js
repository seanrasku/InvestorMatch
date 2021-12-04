let userState;

if (window.localStorage.getItem("tag")) {
  userState = JSON.parse(window.localStorage.getItem("tag"));
} else {
  console.log("IN HERE BIT")
  userState = null; // {}
}

export const userTagReducer = (state = userState, action) => {
  switch (action.type) {
    // case "UPDATED_USER_TAGS":
    //   return { ...state, ...action.payload };
    case "NULLIFY_TAGS":
      return action.payload;
    case "UPDATE_CURR_USER_TAGS":
      return [...state, action.payload]
    case "SET_CURR_USER_TAGS":
      return action.payload;
    case "ADD_TO_CURR_USER_TAGS":
      return [...state, action.payload]
    case "DEL_USER_TAG":
      return action.payload;
    default:
      return state;
  }
};