import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./App.css";
import HomePage from "./pages/HomePage";
import PokemonPage from "./pages/PokemonPage";

function App() {
  return (
    <React.Fragment>
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/pokemon/:id" component={PokemonPage} />
        </Switch>
      </Container>
    </React.Fragment>
  );
}

export default App;
