import {
    CHANGE_ENQURIY,
     CHANGE_PROSPECTS,
     CHANGE_NOT_INTRESTED 
  } from "./type";
  
  export const changeEnquriy = data => ({
    type: CHANGE_ENQURIY,
    payload: data
  });
  
  export const changeProspects = data => ({
    type: CHANGE_PROSPECTS,
    payload: data
  });
  
  export const changeNotIntrested = data => ({
    type: CHANGE_NOT_INTRESTED,
    payload: data
  });
  