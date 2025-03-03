import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Check from "./Components/Check/Check";
import ProjectInfo from "./Components/ProjectInfo/ProjectInfo";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<ProjectInfo />} />
        <Route path="/check-health" element={<Check />} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

