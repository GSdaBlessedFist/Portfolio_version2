import {useEffect,useRef, useState} from "react";
import gsap from "gsap";
import {aboutMeInfo,personalText,professionalText} from "../aboutMeInfo.js";
import "./aboutMePage.scss";
import AboutMePicSVG from "../components/AboutMePicSVG.js";

export default function AboutMePage(){
	
	const picSection = useRef();
	var [pupilXPosition,setPupilXPosition] = useState(0);
	var [pupilYPosition,setPupilYPosition] = useState(-1);

	useEffect(()=>{
		
		picSection.current.addEventListener('mouseover',function(e){
			let picXposition = e.offsetX;
			let picYposition = e.offsetY;
			
			let newXPos = gsap.utils.mapRange(0,400, -4, 2,picXposition);
			let newYPos = gsap.utils.mapRange(0,720, -3, 1,picYposition);
			setPupilXPosition(newXPos);
			setPupilYPosition(newYPos);
		})

	},[pupilXPosition,pupilYPosition])
	
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
						{aboutMeInfo.forEach((info)=>{
							<div className="aboutMePageGrid__contentArea--text___tech-area"></div>
						})}
					</div>
				</div>
				<div className="aboutMePageGrid__contentArea--pic" ref={picSection}>
				<AboutMePicSVG pupilXPosition={pupilXPosition} pupilYPosition={pupilYPosition}/>

				</div>
			</div>
		</div>
	</>)
}