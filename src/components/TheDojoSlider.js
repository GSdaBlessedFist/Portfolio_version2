import {useState, useRef, useEffect} from "react";
import EcospherePond from "./theDojoPieces/EcospherePond";
import SecondOpinionLogo from"./theDojoPieces/SecondOpinionLogo";
//import Funnel from "./theDojoPieces/Funnel";
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from "react-icons/fa";
import "./theDojoSlider.scss";

export default function TheDojoSlider(){
	
	const [currentSlide,setCurrentSlide] = useState(0);
	const componentsArray = [
		<EcospherePond height={600} key="ecosphere" />,
		<SecondOpinionLogo width={300} key="secondOpinionLogo"/>
		
	]
	const length = componentsArray.length;
	const [isActive,setIsActive]=useState(false);

	const prevSlide = ()=>{
		setCurrentSlide(currentSlide === 0 ? length -1 : currentSlide -1);
		setIsActive(!isActive)	
	}
	const nextSlide = ()=>{
		setCurrentSlide(currentSlide === length-1 ? 0 : currentSlide +1);
		setIsActive(!isActive)
		
	}
	console.log(currentSlide)
	return (<>
		<FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
		
		<div className="slider-container">
			{componentsArray.map((slide,index)=>{
				return (
					<div className={index === currentSlide ? "slide active" : "slide"} key={index}>
						{index === currentSlide && (
							<div>{slide}</div>
							
						)}
					</div>
				)
			})}
			
			
		</div>
		<FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
	</>)
}

	