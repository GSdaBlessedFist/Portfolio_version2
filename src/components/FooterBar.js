import "./footerBar.scss";
import {SiLinkedin} from "react-icons/si"
import gsap from "gsap";

export default function FooterBar(){
	const copywrite = "&#169";
	return (<>
		<nav className="footerBar">
			<div>
			 &copy; Copyright {new Date().getFullYear()}. Made by
              Jason Zamora aka<span style={{color:"white",fontSize:"1.2rem"}}>&nbsp; GSdaBlessedFist</span>&nbsp;| View on {''}&nbsp;
              <a href="https://github.com/GSdaBlessedFist/Portfolio_version2" style={{color:"white",textDecoration:"none"}} target="_blank">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/jason-e-zamora/" style={{marginLeft:"10px",fontSize:"1.25rem",color:"white"}} target="blank"><SiLinkedin/></a>
              
            </div>
		</nav>
	</>)
}