// Estilo
    import "./styles/Home.css"
//.

// Components
    import Header from "../components/Header"
    import Footer from "../components/Footer"
    import Valores from "../components/aside"
//.

// Fotos Footer
    import foto from "../assets/gmail.png"
    import foto2 from "../assets/instagram.png"
    import logo from "../assets/logoG3.png"
//.

function Home(){
    return(
        <>
            {/* <Navbar/> */}
            <section className="flexHome">
                <Header/>
                <section className="mainHome">
                    <h1>Boas vindas a HomePage!</h1>
                </section>
                <Valores/>
                <Footer
                    imagem1={foto}
                    imagem2={foto2}
                    email="vitor.cecatosesi@gmail.com"
                    instagram="@vitorgcecato"
                    texto="O Vitor Geraldo Cecato é o responsável pelo projeto Desafio 1, cuidando da coordenação e garantindo que o conteúdo seja de qualidade e esteja sempre no caminho certo."
                    imglogo={logo}
                />
            </section>
        </>
    )
}

export default Home