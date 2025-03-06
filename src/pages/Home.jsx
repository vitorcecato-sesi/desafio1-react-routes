// Estilo
    import "./styles/Home.css"
//.

// Components
    import Header from "../components/Header"
    import Footer from "../components/Footer"
    import Valores from "../components/aside"
    import Integrantes from "../components/Integrantes"
    import Navbar from "../components/Navbar"
//.

// Fotos
    import fotoPerfilLauraB from "../assets/fotoUsuarioLauraB.png"
    import fotoPerfilLucas from "../assets/fotoUsuarioLucas.png"
    import fotoPerfilMilena from "../assets/fotoUsuarioMilena.png"
    import fotoPerfiloPietro from "../assets/fotoUsuarioPietroM.png"
    import fotoPerfilPyetro from "../assets/fotoUsuarioPyetro.png"
    import fotoPerfilVitor from "../assets/fotoUsuarioVitorG.png"

    // Footer
    import foto from "../assets/gmail.png"
    import foto2 from "../assets/instagram.png"
    import logo from "../assets/logoG3.png"
//.

function Home(){
    return(
        <>
            {/* <Navbar/> */}
            <Header/>
            <section className="flexHome">
                
                <center>
                    <section className="mainHome">
                        <Navbar/>

                        <article className="conteudo">
                            <h1>🌳 Boas vindas a HomePage 🏡</h1>
                            <p>Está é a nossa Homepage que foi criada como parte de um desafio!</p>
                            <h2>Integrantes</h2>
                            <section className="blocoIntegrantes">
                                
                                <section className="blocoImg">
                                    <Integrantes 
                                        foto= {fotoPerfilLauraB} 
                                        nome="Laura Betti" 
                                        hobbies="Os meus hobbies são: Ouvir música e ver filmes/séries."
                                    />
                                    <Integrantes 
                                        foto= {fotoPerfilLucas} 
                                        nome="Lucas Casagrande" 
                                        hobbies="Os meus hobbies são: Praticar vôlei, jogar jogos online e assistir séries."
                                    />
                                </section>

                                <section className="blocoImg">
                                    <Integrantes 
                                        foto= {fotoPerfilMilena} 
                                        nome="Milena Souza" 
                                        hobbies="Os meus hobbies são: Escutar música, ver filmes e séries, estudar matemática e cozinhar."
                                    />
                                    <Integrantes 
                                        foto= {fotoPerfiloPietro} 
                                        nome="Pietro Melle" 
                                        hobbies="Os meus hobbies são: Praticar esportes."
                                    />
                                </section>

                                <section className="blocoImg">
                                    <Integrantes 
                                        foto= {fotoPerfilPyetro} 
                                        nome="Pyetro Joaquim" 
                                        hobbies="Os meus hobbies são: Jogar jogos online, ouvir música e cozinhar."
                                    />
                                    <Integrantes 
                                        foto= {fotoPerfilVitor} 
                                        nome="Vitor Cecato" 
                                        hobbies="Meus hobbies são: jogar jogos online, programar e nadar."
                                    />
                                </section>

                            </section>

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