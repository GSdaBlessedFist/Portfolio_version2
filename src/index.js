import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./global.scss";
import HeaderBar from './components/HeaderBar';
import ProjectsPage from "./routes/ProjectsPage";
import TheDojoPage from "./routes/TheDojoPage";
import AboutMePage from "./routes/AboutMePage";

import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <HeaderBar />
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="projects" element={<ProjectsPage />}/>
      <Route path="the-dojo" element={<TheDojoPage />}/>
      <Route path="about-me" element={<AboutMePage />}/>
    </Routes>
    
  </BrowserRouter>,
  document.getElementById('root')
);
