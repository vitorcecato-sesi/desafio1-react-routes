import "./Header.css"
import logoG3 from "../assets/logoG3.png"

function Header() {
    return (
        <header className="Header"> 
            <h1> Desafio 1 - React Routes </h1>
            <img className="imagem" src={logoG3} />
        </header>
    )
}

export default Header