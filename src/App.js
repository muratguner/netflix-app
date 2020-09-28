import React from "react";
import requests from "./requests";
import Row from "./Row";
import Nav from "./Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Row title="" fetchUrl={requests.fetchTrending} isLargeRow></Row>
    </div>
  );
}

export default App;
