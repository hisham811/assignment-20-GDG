import { Link } from "react-router-dom"
import "../Styles/Header.css"
const Header = () => {
    
    return(
        <>
        <header>
            <Link to={"/"} className="name">Hisham Mostafa</Link>
            <nav>
                <Link to={"/"} className="link">Home</Link>
                <Link to={"/Users"} className="link">Users</Link>
                <Link to={"/Contact"} className="link">Contact</Link>
            </nav>
        </header>
        </>
    )
}
export default Header