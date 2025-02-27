import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">🏠 Home</Link>
                </li>
                <li>
                    <Link to="/Sobre">ℹ Sobre</Link>
                </li>
                <li>
                    <Link to="/Contato">📞 Contato</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar
