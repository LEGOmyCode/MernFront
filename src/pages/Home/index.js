import React from "react";
import SearchWindow from "../../components/SearchWindow";
import "./styles.css";

const Home = () => {
  return (
    <div className="landingPage">
      <h1 className="title">Welcome to MERN'd Black</h1>
      <SearchWindow />
    </div>
  );
};

export default Home;
