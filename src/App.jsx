import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Activities from "./pages/activities/Activities";
import Home from "./pages/home/Home";
import Participate from "./pages/participate/Participate";
import Partners from "./pages/partners/Partners";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/participate" element={<Participate />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
