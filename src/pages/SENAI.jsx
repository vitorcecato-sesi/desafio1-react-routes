import Header from "../components/Header";
import senai from "../assets/senai.png"
import "../pages/styles/SENAI.css"
import Footer from "../components/Footer";
import foto from "../assets/gmail.png"
import foto2 from "../assets/instagram.png"
import foto3 from "../assets/logoG3.png"
import Navbar from "../components/Navbar";


function Senai(){
    return(
        <>
    <Header/>
    <h1 className="blocoSenai">Sobre SENAI</h1>
<section className="linha">
<Navbar/>
<article>

    <section className="blocoTextoSenai">
    <img className="img" src={senai}/>
    <p>O curso de Análise e Desenvolvimento de Sistemas do SENAI capacita profissionais para criar, implementar e manter sistemas de software. Durante a formação, os alunos aprendem programação, banco de dados, redes, segurança da informação e análise de requisitos. A metodologia é prática, com laboratórios equipados para experiências reais. O curso prepara os estudantes para trabalhar no desenvolvimento de sistemas, gestão de TI e soluções inovadoras em empresas de diversos setores. O SENAI também possui parcerias com empresas, o que facilita a inserção no mercado de trabalho.



</p>
</section>
</article>
</section>

<Footer
                    imagem1={foto}
                    imagem2={foto2}
                    email="vitor.cecatosesi@gmail.com"
                    instagram="@vitorgcecato"
                    texto="O Vitor Geraldo Cecato é o responsável pelo projeto Desafio 1, cuidando da coordenação e garantindo que o conteúdo seja de qualidade e esteja sempre no caminho certo."
                    imglogo={foto3}
                />

    </>
    )
}



export default Senai;