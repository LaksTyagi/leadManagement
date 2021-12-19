import React from "react";
import { Redirect } from "react-router-dom";


import Dashboard from "../pages/Dashboard";
import LeadManagement from '../pages/LeadManagement/LeadManagement'
import Login from '../pages/LoginPage'
import Register from '../pages/RegisterPage'
import ForgotPassword from '../pages/RecoverPassword'
import AddLead from '../pages/LeadManagement/AddLead'
import Users from "../pages/Users"
import ShowLeads from '../pages/LeadManagement/ShowLeads'

const authProtectedRoutes = [
  
  { path: "/leadManagement", component: LeadManagement },
  { path: "/dashboard", component: Dashboard },
  { path: "/add_lead", component: AddLead },
  { path: "/users", component: Users },
  { path: "/show_lead/:id", component: ShowLeads },


  {path:"/login", component: Login,nav:true},
  {path:"/register", component: Register,nav:true},
  {path:"/forgotPassword", component: ForgotPassword,nav:true},
  { path: "/", exact: true, component: () => <Redirect to="/login" /> }
];


export { authProtectedRoutes };
