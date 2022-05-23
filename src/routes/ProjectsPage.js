import {useRef,useEffect} from "react";
import "./projectsPage.scss";
import pieces from "../projectInfo.js";
import {gsap} from "gsap";
// import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function ProjectsPage(){
	
	const firstLetterButtonRefs = useRef([]);
    firstLetterButtonRefs.current = [];
	var firstLetterButtons = firstLetterButtonRefs.current;
	function addFirstLetterRefs(el){
	  if (el && !firstLetterButtons.includes(el)) {
	    firstLetterButtons.push(el);
	  }
	};

	useEffect(()=>{
		// gsap.set(firstLetterButtons,{
		// 	fontSize: function(){return gsap.utils.random(2,5.0)+"rem"}
		// })
	},[])
	const revPieces = pieces.reverse();
	return (<>
		<div className="projectsPageGrid">
			<div className="projectsPageGrid--title">Projects
				{/*{revPieces.map((piece,index)=>{
					console.log(index);
					
					return (<AnchorLink href={`#${piece.id}`} className="projectsPageGrid--title_buttons" ref={addFirstLetterRefs} key={index}>{index}</AnchorLink>)
					
				})}   */}
			</div>
			<div className="projectsArea">
				{pieces.map((piece,index)=>{
					
					return (<>
						<div className="projectsComponent" id={piece.id} key={piece.index}>
							<div className="projectsComponent--descriptionSection">
								<h2>Goal:</h2>
								<div className="projectsComponent--descriptionSection_goal">{piece.goal}</div>	
								<h2>Description:</h2>
								<div className="projectsComponent--descriptionSection_description">{piece.description}</div>
								<h2>Tech stack:</h2>
								<div className="projectsComponent--descriptionSection_techStack">{piece.techStack}</div>
							</div>
							<div className="projectsComponent--workSection">
								<div className="projectsComponent--workSection_title">{piece.name}</div>
								<img className="projectsComponent--workSection_screenshot" src={piece.screenShot} id={piece.name} key={piece.index}/>
								<div className="projectsComponent--workSection---links">
									<a href={piece.url} className="projectsComponent--workSection---links_url" target="_blank">live site</a>
									<a href="piece.git" className="projectsComponent--workSection---links_url" target="_blank">git</a>								
								</div>							
							</div>

						</div>
					</>)
				})}
			</div>
		</div>
			
	</>)
}
