import "./headerBar.scss";
import {useRef,useEffect} from "react";
import { Outlet, NavLink } from "react-router-dom";
import gsap from "gsap";

export default function HeaderBar(){
	
	

	return (<>
		<nav className={"headerBar"}>
			<NavLink to="/projects" 				
				className={({ isActive }) => (isActive ? "headerBar-buttons headerBar-buttons--activeLink": 
														 "headerBar-buttons headerBar-buttons--inActiveLink")}>
				Projects
			</NavLink>
    		<NavLink to="/the-dojo"
				className={({ isActive }) => (isActive ? "headerBar-buttons headerBar-buttons--activeLink": 
														 "headerBar-buttons headerBar-buttons--inActiveLink")}>
    			The DOJO
    		</NavLink>
    		<NavLink to="/about-me"
				className={({ isActive }) => (isActive ? "headerBar-buttons headerBar-buttons--activeLink": 
														 "headerBar-buttons headerBar-buttons--inActiveLink")}>
    			about me
    		</NavLink>
		</nav>
	</>)
}