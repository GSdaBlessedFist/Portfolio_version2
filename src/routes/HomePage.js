import "./homePage.scss";
import HomePageMenu from "../components/HomePageMenu";
import Funnel from "../components/Funnel";

export default function HomePage(){
	
	return (
		<div className="homePageGrid">
			<div className="space"></div>
			<div className="middle">
				<Funnel/>
				<HomePageMenu/>
			</div>
			<div className="space"></div>
		</div>
	)
}