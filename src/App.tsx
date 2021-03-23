import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Contact from "./Pages/Contact";
import VideoGames from "./Pages/VideoGames";

function App() {
  const styles = {
    page: {
      width: "90vw",
      margin: "0 auto",
    }
  }
  return (
    <div className="page">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route component={VideoGames} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
