import { combineReducers } from "redux";

// Front
import Layout from "./user/reducer";
import Data from "./data/reducer"

const rootReducer = combineReducers({
  // public
  Layout,
  Data
 });

export default rootReducer;
