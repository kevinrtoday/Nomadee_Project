import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
// import Edit from "./components/edit";
import Join from "./views/join";
import Home from "./views/home";
import Events from "./views/events";
import Record from "../src/components/record";

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route path="/edit/:id" component={Edit} /> */}
      {/* <Edit /> */}
      <Route exact path="/join">
        <Join />
      </Route>
      <Route exact path="/events">
        <Events />
      </Route>
      <Route exact path="/record">
        <Record />
      </Route>
    </div>
  );
};

export default App;
