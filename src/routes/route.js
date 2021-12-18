import React from "react";
import { Route, Redirect } from "react-router-dom";



const AppRoute = ({
  component: Component,
  layout: Layout,
  isAuthProtected,nav,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (!isAuthProtected) {
        return (
          <Redirect
            to={{ pathname: "/", state: { from: props.location } }}
          />
        );
      }
      if(nav){
        return (
          <Component {...props} />
        );
      }

      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);

export default AppRoute;
