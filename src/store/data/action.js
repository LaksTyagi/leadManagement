import {
    CHANGE_ENQURIY,
     CHANGE_PROSPECTS,
     CHANGE_NOT_INTRESTED ,TOTAL_USER
  } from "./type";
  
  export const changeEnquriy = data => ({
    type: CHANGE_ENQURIY,
    payload: data
  });

  
  export const changeTotalUser = data => ({
    type: TOTAL_USER,
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
  