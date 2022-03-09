import "./homePage.scss";
import HomePageMenu from "../components/HomePageMenu";

export default function HomePage(){
	
	return (
		<div className="homePageGrid">
			<div className="space"></div>
			<div className="middle">
				<HomePageMenu/>
			</div>
			<div className="space"></div>
		</div>
	)
}