import "./App.css";
import Routes from "./Routes/Routes";
import Modal from "react-modal";
import React from "react";

Modal.setAppElement("#root");

function App() {
  return <Routes />;
}

export default App;
