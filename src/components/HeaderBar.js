import "./headerBar.scss";
import {useRef,useEffect} from "react";
import { Outlet, NavLink } from "react-router-dom";
import gsap from "gsap";

export default function HeaderBar(){
	

	return (<>
		<nav className={"headerBar"}>
			<div className="headerBar-title">Jason Zamora's <a href="/"><span id="portfolio" >portfolio</span></a></div>
			<div className="headerBar-buttonGroup">
				<NavLink to="/projects"  				
					className={({ isActive }) => (isActive ? "headerBar-buttonGroup-buttons headerBar-buttonGroup-buttons--activeLink": 
															 "headerBar-buttonGroup-buttons")}>
					Projects
				</NavLink>

	    		<NavLink to="/the-dojo"
					className={({ isActive }) => (isActive ? "headerBar-buttonGroup-buttons headerBar-buttonGroup-buttons--activeLink":
															 "headerBar-buttonGroup-buttons")}>
	    			The DOJO
	    		</NavLink>
	    		<NavLink to="/about-me" id="aboutme"
					className={({ isActive }) => (isActive ? "headerBar-buttonGroup-buttons headerBar-buttonGroup-buttons--activeLink":
															 "headerBar-buttonGroup-buttons")}>
	    			about me
	    		</NavLink>
	    		<Outlet/>
    		</div>
		</nav>
	</>)
}