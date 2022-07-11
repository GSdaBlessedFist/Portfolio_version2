import styles from "./theDojoPage.scss";
import EcospherePond from "../components/theDojoPieces/EcospherePond.js";

export default function TheDojoPage(){
	
	return (<>
		<div className="theDojoPageGrid">
			<div className="theDojoPageGrid__title">The DOJO</div>
			<div className="theDojoArea">
				<EcospherePond height="500"/>
			</div>
		</div>
	</>)
}