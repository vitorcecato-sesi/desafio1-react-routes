import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar(){
    return(
        <nav className="blocoNav">
            <ul>
                <li>
                    <Link className="fonte" id="link" to="/">🏠 Home</Link>
                </li>
                <li>
                    <Link className="fonte" id="link" to="/tarefas">🧾 Tarefas</Link>
                </li>
                <li>
                    <Link className="fonte" id="link" to="/valores">🎴 Valores</Link>
                </li>
                <li>
                    <Link className="fonte" id="link" to="/sobrenos">ℹ Sobre</Link>
                </li>
                <li>
                    <Link className="fonte" id="link" to="/sobreosenai">ℹ Senai</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar
