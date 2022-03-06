import "./App.css";
import React from "react";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Home } from "./MyComponents/Home";
import { About } from "./MyComponents/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header title="My ToDos List" searchBar={true} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
