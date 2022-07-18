import styles from "./theDojoPage.scss";
import TheDojoSlider from "../components/TheDojoSlider";
import EcospherePond from "../components/theDojoPieces/EcospherePond.js";

export default function TheDojoPage(){
	
	return (<>
		<div className="theDojoPageGrid">
			<div className="theDojoPageGrid__title">The DOJO</div>
			<div className="theDojoArea">
				<TheDojoSlider/>
				
			</div>
		</div>
	</>)
}