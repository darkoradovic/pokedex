import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomePage from "./pages/HomePage";
import PokemonPage from "./pages/PokemonPage";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
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
