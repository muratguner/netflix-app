import React from "react";
import requests from "./requests";
import Row from "./Row";
import Nav from "./Nav";
import Banner from "./Banner";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOrigins}
        isLargeRow
        style={{ paddingTop: "24px" }}
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentariesMovies}
      ></Row>
    </div>
  );
}

export default App;
