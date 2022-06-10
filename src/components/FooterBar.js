import "./footerBar.scss";
// eslint-disable-next-line
import gsap from "gsap";

export default function FooterBar(){
	const copywrite = "&#169";
	return (<>
		<nav className="footerBar">
			<div>
			 &copy; Copyright {new Date().getFullYear()}. Made by
              Jason Zamora aka<span style={{color:"white",fontSize:"1.2rem"}}>&nbsp; GSdaBlessedFist</span>&nbsp;| View on {''}&nbsp;
              <a href="https://github.com/GSdaBlessedFist/Portfolio_version2" target="_blank">
                GitHub
              </a>
            </div>
		</nav>
	</>)
}