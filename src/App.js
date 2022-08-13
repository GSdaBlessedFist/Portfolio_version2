import React, {useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Helmet from "react-helmet";
import PrimeGrid from "./components/PrimeGrid";
import HomePage from "./routes/HomePage";
import ProjectsPage from "./routes/ProjectsPage";
import TheDojoPage from "./routes/TheDojoPage";
import AboutMePage from "./routes/AboutMePage";
import ReactGA from 'react-ga4';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_MEASUREMENT_ID);
ReactGA.send("pageview");

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
        <Helmet>
          <!-- Google tag (gtag.js) -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-C5LPNG85N0"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-C5LPNG85N0');
          </script>
        </Helmet>
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
