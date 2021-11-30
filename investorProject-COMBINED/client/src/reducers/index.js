import { combineReducers } from "redux";
import { authReducer } from "./auth";
import {tagReducer} from './tag'
import { userTagReducer } from "./tags";
const rootReducer = combineReducers({
  auth: authReducer,
  tags: tagReducer,
  userTags: userTagReducer,
});

export default rootReducer;
