import {Helmet} from "react-helmet";
import {useRef,useEffect} from "react";
import "./projectsPage.scss";
import pieces from "../projectInfo.js";
//import {gsap} from "gsap";
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
		<Helmet>
             <meta charSet="utf-8" />
             <title>Portfolio-Projects page</title>
             <meta name="description" content="Project gallery on JasonZamoraPortfolio.ml" />
         </Helmet>



		<div className="projectsPageGrid">
			<div className="projectsPageGrid__title">Projects
				{/*{revPieces.map((piece,index)=>{
					console.log(index);
					
					return (<AnchorLink href={`#${piece.id}`} className="projectsPageGrid__title--buttons" ref={addFirstLetterRefs} key={index}>{index}</AnchorLink>)
					
				})}   */}
			</div>
			<div className="projectsArea">
				{revPieces.map((piece,index)=>{
					
					return (<>
						<div className="projectsComponent" id={piece.id} key={piece.index}>
							<div className="projectsComponent__descriptionSection">
								<h2>Goal:</h2>
								<div className="projectsComponent__descriptionSection--goal">{piece.goal}</div>	
								<h2>Description:</h2>
								<div className="projectsComponent__descriptionSection--description">{piece.description}</div>
								<h2>Tech stack:</h2>
								<div className="projectsComponent__descriptionSection--techStack">{piece.techStack}</div>
							</div>
							<div className="projectsComponent--workSection">
								<div className="projectsComponent__workSection">{piece.name}</div>
								<img className="projectsComponent__workSection--screenshot" src={piece.screenShot} id={piece.name} key={piece.index} alt={piece.name}/>
								<div className="projectsComponent__workSection--links">
									<a href={piece.url} className="projectsComponent__workSection--links_url" target="_blank" rel="noreferrer">live site</a>
									<a href={piece.git} className="projectsComponent__workSection--links_url" target="_blank" rel="noreferrer">git</a>								
								</div>							
							</div>

						</div>
					</>)
				})}
			</div>
		</div>
			
	</>)
}
