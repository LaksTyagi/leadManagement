// @flow
import {
    CHANGE_ENQURIY,
     CHANGE_PROSPECTS,
     CHANGE_NOT_INTRESTED 
  } from "./type";
  
  const INIT_STATE = {
    enquiry:0,
    prospects:0,
    notIntrested:0
  };
  
  const Layout = (state = INIT_STATE, action) => {
    switch (action.type) {
      case CHANGE_ENQURIY:
        return {
          ...state,
          enquiry: action.payload
        };
      case CHANGE_PROSPECTS:
        return {
          ...state,
          prospects: action.payload
        };
      case CHANGE_NOT_INTRESTED:
        return {
          ...state,
          notIntrested: action.payload
        };
      
      default:
        return state;
    }
  };
  
  export default Layout;
  