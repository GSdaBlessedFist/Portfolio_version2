import aboutMeInfo from "../aboutMeInfo.js";
import "./aboutMePage.scss";

export default function AboutMePage(){
	// aboutMeInfo[0=techs,1=graphic,2[0]=text] //
	// aboutMeInfo[2][0].personal
	return (<>
		<div className="aboutMePageGrid">
			<div className="aboutMePageGrid--title">about me</div>
			<div className="aboutMePageGrid--content-area">
				<div className="aboutMePageGrid--content-area_text">
					<div className="aboutMePageGrid--content-area_text---personal-title">personal:</div>
					<div className="aboutMePageGrid--content-area_text---personal-text">{aboutMeInfo[2][0].personal}</div>
					<div className="aboutMePageGrid--content-area_text---professional-title">professional:</div>
					<div className="aboutMePageGrid--content-area_text---professional-text">{aboutMeInfo[2][0].professional}</div>
					<div className="aboutMePageGrid--content-area_text---tech-area">
						{aboutMeInfo[0].map((info)=>{
							<div className="tech-area--box">this</div>
						})}
					</div>
				</div>
				<div className="aboutMePageGrid--content-area_pic">picture goes here</div>
			</div>
		</div>
	</>)
}