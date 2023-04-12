import React from "react";
import Home from "./Home";
import OrderForm from "./Orderform";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Success from "./Success";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Orderform">
          <OrderForm />
        </Route>
        <Route exact path="/Success">
          <Success />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
