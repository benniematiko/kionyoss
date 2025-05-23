import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";


import Navbar from "./components/Navbar/Navbar";
import Teachers from "./pages/teachers/Teachers";
import SchoolHistory from "./pages/schoolhistory/SchoolHistory";
import AlumniCommunity from "./pages/alumni/AlumniCommunity";
import Academics from "./pages/academics/Academics";
const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/schoolhistory" element={<SchoolHistory />} />
          <Route path="/alumni" element={<AlumniCommunity />} />
          <Route path="/academics" element={<Academics />} />
       
        
        </Routes>
      </Router>
    </div>
  );
};

export default App;
