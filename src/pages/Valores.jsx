// Components
import Header from "../components/Header"
import Footer from "../components/Footer"

// Fotos Footer
import foto from "../assets/gmail.png"
import foto2 from "../assets/instagram.png"
import logo from "../assets/logoG3.png"
//.

import fotogrupo from "../assets/fotogrupo.jpeg"
import "./styles/Valores.css"

function ValoresGrupo () {
    return (
        <>
            <section>

                <Header/>  {/*Chamando o componente Header*/}

                <section>

                    <section className="valor"> 
                        <h2>Conheça os Valores do nosso grupo! </h2>
                    </section>

                    <section className="bloco"> 
  
                        <article className="textos" > 
                            <p> <h4> União </h4> Um dos principais componentes do nosso grupo é a união. Sempre juntos fazendo as atividades propostas pelos professores, auxiliando aqueles que precisam. Assim, temos um melhor desempenho! 😊</p>
                            <p> <h4> Honestidade </h4> Honestidade é um princípio importante para trabalharmos juntos e para ter um bom convívio, sincero e verdadeiro com os integrantes do grupo. 👪</p>
                            <p> <h4> Comprometimento </h4> Esse é o valor mais importante para uma equipe. Ter comprometimento com o resto do grupo é fundamento para um trabalho bem feito e organizado. 📚 </p>
                        </article>

                        <img className="fotogrupo" src={fotogrupo}/>

                    </section>

                </section>

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

export default ValoresGrupo