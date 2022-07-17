import React from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <HashRouter basename="/">
      <Header />
      <div>APP</div>
    </HashRouter>
  );
};

export default App;
