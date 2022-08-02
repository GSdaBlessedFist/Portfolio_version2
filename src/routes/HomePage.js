import "./homePage.scss";
import HomePageMenu from "../components/HomePageMenu";
//import Funnel from "../components/Funnel";
import {Helmet} from "react-helmet";


export default function HomePage(){	

	return (<>
		 <Helmet>
               <meta charSet="utf-8" />
               <title>Jason Zamora's Portfolio-Homepage</title>
               <link rel="canonical" href="http://jasonzamoraportfolio.ml" />
               <meta name="description" content="Project gallery on JasonZamoraPortfolio.ml" />
           </Helmet>

		<div className="homePageGrid">
			<div className="space"></div>
			<div className="middle">

				
				
				<HomePageMenu/>
			</div>
			<div className="space"></div>
		</div>
	</>)
}