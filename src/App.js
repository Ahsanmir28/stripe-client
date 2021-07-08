import React from "react";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListAllCoupons from "./components/components-stripe/ListAllCoupons";
import AddCoupons from "./components/components-stripe/AddCoupons";
import Home from "./components/Home";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/get-stripe-coupons" component={ListAllCoupons} />
        <Route exact path="/create-stripe-coupons" component={AddCoupons} />
        <Route exact path="/auth" component={Auth} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
