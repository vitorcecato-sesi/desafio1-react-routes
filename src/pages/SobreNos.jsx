import "./styles/SobreNos.css"

import UsuarioCard from "../components/UsuarioCard"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
//.

// Fotos
import fotoPerfilLauraB from "../assets/fotoUsuarioLauraB.png"
import fotoPerfilLucas from "../assets/fotoUsuarioLucas.png"
import fotoPerfilMilena from "../assets/fotoUsuarioMilena.png"
import fotoPietro from "../assets/fotoUsuarioPietroM.png"
import fotoPyetro from "../assets/fotoUsuarioPyetro.png"
import fotoVitor from "../assets/fotoUsuarioVitorG.png"
//.

// Fotos Footer
import foto from "../assets/gmail.png"
import foto2 from "../assets/instagram.png"
import logo from "../assets/logoG3.png"
//.

function SobreNos() {

return (
  <>
    <Header/>
    <article className="blocoIntro">
    <h1> Sobre nós: </h1>
    <p>Conheça melhor o grupo 3 e siga seus integrantes!</p>
    </article>
    <section className="meioPagina">
    <Navbar/>
      <main className="elementosCartas">
        <section className="blocoCartas">
          <UsuarioCard
            // Aqui estamos passando a foto como propriedade para o componente "UsuarioCard"
            foto={fotoPerfilLauraB}
            // Aqui estamos passando o nome como propriedade para o componente "Perfil"
            nome="@Laura_betti"
          />

          <UsuarioCard
            foto={fotoPerfilLucas} 
            nome="@Lucas_casagrande" 
          />

          <UsuarioCard 
            foto={fotoPerfilMilena} 
            nome="@Milena_souza" 
          />
        </section>

        <section className="blocoCartas">
          <UsuarioCard 
            foto={fotoPietro} 
            nome="@Pietro_Melle" 
          />

          <UsuarioCard
            foto={fotoPyetro} 
            nome="@Pyetro_Joaquim" 
          />

          <UsuarioCard
            foto={fotoVitor} 
            nome="@Vitor_Geraldo" 
          />
        </section>
      </main>
    </section>
    <Footer 
      imagem1={foto} 
      imagem2={foto2} 
      email="vitor.cecatosesi@gmail.com" 
      instagram="@vitorgcecato"
      texto="O Vitor Geraldo Cecato é o responsável pelo projeto PROPS, cuidando da coordenação e garantindo que o conteúdo seja de qualidade e esteja sempre no caminho certo." 
      imglogo={logo}
    />
  </>
)
}

export default SobreNos
