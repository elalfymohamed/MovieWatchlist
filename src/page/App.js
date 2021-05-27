import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "../components/Header";
import WatchList from "../components/WatchList";
import Watched from "../components/Watched";
import Add from "../components/Add";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={WatchList} />
        <Route path="/watched" component={Watched} />
        <Route exact path="/add" component={Add} />
      </Switch>
    </Router>
  );
}
