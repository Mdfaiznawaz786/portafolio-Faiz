import React, { useState, useEffect } from "react";
import AOS from "aos";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Services from "./pages/Service/ServicesPage";
import Project from "./pages/Project/ProjectPage";

import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const frame = requestAnimationFrame(() => AOS.init({ duration: 700, once: true }));
      return () => cancelAnimationFrame(frame);
    }
  }, [loading]);
  return (
    <>
      <RouterScrollTop />
      {loading ? (
        <div className="loading-pag">
          <div className="loader">
            <span>{'=(Faiz)=>'}</span>
            <span>{'=(Faiz)=>'}</span>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/service" element={<Services />}></Route>
          <Route exact path="/project" element={<Project />}></Route>
          <Route path="/project/app" element={<Navigate to="/project" replace />} />
          <Route path="/project/game" element={<Navigate to="/project" replace />} />
        </Routes>
      )}
    </>
  );
}

export default App;
