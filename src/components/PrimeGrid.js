import "./primeGrid.scss"
import HeaderBar from './HeaderBar';
import FooterBar from "./FooterBar";

export default function PrimeGrid({children}){
    
    return (<>
        <div className="primeGrid">
            <HeaderBar/>
            {children}
            <FooterBar/>
        </div>
    </>)
}

