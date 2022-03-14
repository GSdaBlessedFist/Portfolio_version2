import styles from "./projectsPage.scss";

const pieces = [
	{
		name: "piece 1",
		goal: "This is a test entry"
	}
]

export default function ProjectsPage(){
	
	return (<>
		<div className="projectsPageGrid">
			<div className="projectsPageGrid--title">Projects</div>
			{pieces.map((piece)=>{
				return (<>
					<div className="projectsComponent">
						<div className="projectsComponent--descriptionSection">
							<div className="projectsComponent--description_goal">{piece.goal}</div>	
						</div>
						<div className="projectsComponent--workSection">{piece.name}</div>
					</div>
				</>)
			})}
		</div>
			
	</>)
}
function ProjectsComponent({piece}){
	return <div>HERE</div>;
	
}