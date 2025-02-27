// Estilo
    import "./styles/Home.css"
//.

// Components
    import Header from "../components/Header"
    import Footer from "../components/Footer"
    import Valores from "../components/aside"
//.

// Fotos
    // Footer
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
                <center>
                    <section className="mainHome">
                        <Valores/>
                        <article className="conteudo">
                            <h1>🌳 Boas vindas a HomePage 🏡</h1>
                            <p>Está é a nossa Homepage que foi criada como parte de um desafio!</p>
                            <img src="https://img.freepik.com/vetores-gratis/ilustracao-encantadora-de-uma-casa-de-desenho-animado_1308-176076.jpg" alt="Casa" />
                        </article>
                        <Valores
                            valor1="União"
                            valor2="Honestidade"
                            valor3="Comprometimento"
                        />
                    </section>
                </center>
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