import React from "react";
import requests from "./requests";
import Row from "./Row";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Row title="" fetchUrl={requests.fetchTrending}></Row>
    </div>
  );
}

export default App;
