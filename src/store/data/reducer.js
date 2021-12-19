// @flow
import {
  CHANGE_ENQURIY,
  CHANGE_PROSPECTS,
  CHANGE_NOT_INTRESTED,
  TOTAL_USER,
  USER_REGISTER,ADD_LEADS
} from "./type";

const INIT_STATE = {
  enquiry: 0,
  prospects: 0,
  notIntrested: 0,
  totalUsers: [],
  register: "",
  leads:[]
};

const Layout = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANGE_ENQURIY:
      return {
        ...state,
        enquiry: action.payload,
      };
    case CHANGE_PROSPECTS:
      return {
        ...state,
        prospects: action.payload,
      };
    case CHANGE_NOT_INTRESTED:
      return {
        ...state,
        notIntrested: action.payload,
      };
    case TOTAL_USER:
      return {
        ...state,
        totalUsers: action.payload,
      };
    case USER_REGISTER:
      return {
        ...state,
        register: action.payload,
      };
      case ADD_LEADS:
      return {
        ...state,
        leads: action.payload,
      };
    default:
      return state;
  }
};

export default Layout;
