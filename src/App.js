import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PrimeGrid from "./components/PrimeGrid";

import HomePage from "./routes/HomePage";
import ProjectsPage from "./routes/ProjectsPage";
import TheDojoPage from "./routes/TheDojoPage";
import AboutMePage from "./routes/AboutMePage";

function App() {
  return (
    <BrowserRouter>
      <PrimeGrid>
        
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="projects" element={<ProjectsPage />}/>
          <Route path="the-dojo" element={<TheDojoPage />}/>
          <Route path="about-me" element={<AboutMePage />}/>
        </Routes>
        
      </PrimeGrid>
    </BrowserRouter>
    
  );
}

export default App;
