import React from "react";
import { Redirect } from "react-router-dom";


import Dashboard from "../pages/Dashboard";
import LeadManagement from '../pages/LeadManagement/LeadManagement'

const authProtectedRoutes = [
  
  { path: "/leadManagement", component: LeadManagement },
  { path: "/dashboard", component: Dashboard },
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
];


export { authProtectedRoutes };
