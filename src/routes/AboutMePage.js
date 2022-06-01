import {aboutMeInfo,personalText,professionalText} from "../aboutMeInfo.js";
import "./aboutMePage.scss";

export default function AboutMePage(){
	// aboutMeInfo[0=techs,1=graphic,2[0]=text] //
	// aboutMeInfo[2][0].personal

	console.log(JSON.stringify(professionalText));
	
	return (<>
		<div className="aboutMePageGrid">
			<div className="aboutMePageGrid__title">about me</div>
			<div className="aboutMePageGrid__contentArea">
				<div className="aboutMePageGrid__contentArea--text">
					<div className="aboutMePageGrid__contentArea--text___personal">
						<div>
							<h2 style={{padding:"1.15rem"}}>Personal:</h2>
							<p>{personalText}</p>
						</div>
					</div>
					<div className="aboutMePageGrid__contentArea--text___professional">
						<div>
							<h2 style={{textAlign:"right",padding:"1.15rem"}}>Professional:</h2>
							<p>{professionalText}</p>
						</div>
					</div>
					<div className="aboutMePageGrid__contentArea--text___tech-area">
						{aboutMeInfo.map((info)=>{
							<div className="aboutMePageGrid__contentArea--text___tech-area"></div>
						})}
					</div>
				</div>
				<div className="aboutMePageGrid__contentArea--pic">picture goes here</div>
			</div>
		</div>
	</>)
}