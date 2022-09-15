import React from "react";
import SearchWindow from "../../components/SearchWindow";
import "./styles.css";

const Home = () => {
  return (
    <div className="landingPage">
      <h1 className="title">Travel Log</h1>
      <SearchWindow />
    </div>
  );
};

export default Home;
