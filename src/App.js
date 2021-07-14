import React from "react";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListAllCoupons from "./components/components-stripe/ListAllCoupons";
import AddCoupons from "./components/components-stripe/AddCoupons";
import Home from "./components/Home";
import Auth from "./components/Auth/Auth";
import ProtectedRoute from "react-protected-route-component";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.reducers);
  console.log(user);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute
          exact
          path="/get-stripe-coupons"
          redirectRoute="/auth"
          guardFunction={() => {
            if (user.auth.authData == null) {
              return false;
            } else if (user.auth.authData.token) {
              return true;
            }
          }}
          component={ListAllCoupons}
        />
        <ProtectedRoute
          exact
          path="/create-stripe-coupons"
          redirectRoute="/auth"
          guardFunction={() => {
            if (user.auth.authData == null) {
              return false;
            } else if (user.auth.authData.token) {
              return true;
            }
          }}
          component={AddCoupons}
        />
        <Route exact path="/auth" component={Auth} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
