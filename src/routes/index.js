import React from "react";
import { Redirect } from "react-router-dom";


import Dashboard from "../pages/Dashboard";
import LeadManagement from '../pages/LeadManagement/LeadManagement'
import Login from '../pages/LoginPage'
import Register from '../pages/RegisterPage'
import ForgotPassword from '../pages/RecoverPassword'

const authProtectedRoutes = [
  
  { path: "/leadManagement", component: LeadManagement },
  { path: "/dashboard", component: Dashboard },
  {path:"/login", component: Login},
  {path:"/register", component: Register},
  {path:"/forgotPassword", component: ForgotPassword},
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
];


export { authProtectedRoutes };
