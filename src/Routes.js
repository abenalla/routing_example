import React from "react";
import { About, Home, NotFound, Pokemons } from "./components/";
import { Route, Switch } from "react-router-dom";

// /home/
export default function Routes() {
  return (
    <Switch>
      <Route path="/about" component={About} />
      <Route exact path="/home/hello">
        <About />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/pokemon" component={Pokemons} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}
