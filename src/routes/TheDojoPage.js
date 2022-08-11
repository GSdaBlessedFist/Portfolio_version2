import {Helmet} from "react-helmet";
import styles from "./theDojoPage.scss";
import TheDojoSlider from "../components/TheDojoSlider";

export default function TheDojoPage(){
	
	return (<>

		<Helmet>
             <meta charSet="utf-8" />
             <title>Portfolio-Dojo page</title>
             <meta name="description" content="My design and animation playground gallery on JasonZamoraPortfolio.ml" />
         </Helmet>

		<div className="theDojoPageGrid">
			<div className="theDojoPageGrid__title">The DOJO</div>
			<div className="theDojoArea">
				<TheDojoSlider/>
				
			</div>
		</div>
	</>)
}