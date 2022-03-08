import "./homePage.scss";
import HomePageMenu from "../components/HomePageMenu";

export default function HomePage(){
	
	return (
		<div className="homePageGrid">
			<div className="space">space</div>
			<HomePageMenu/>
			<div className="space">space</div>
		</div>
	)
}