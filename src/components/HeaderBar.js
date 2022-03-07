import styles from "./headerBar.module.scss";
import { Outlet, NavLink } from "react-router-dom";

export default function HeaderBar(){
	
	return (<>
		<nav className={styles.headerBar}>
			<NavLink to="/projects">Projects</NavLink>
    		<NavLink to="/the-dojo">The DOJO</NavLink>
    		<NavLink to="/about-me">about me</NavLink>
		</nav>
	</>)
}