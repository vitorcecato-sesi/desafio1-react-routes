import { useState } from 'react';
import "../pages/styles/Tarefa.css"

// Função Tarefa que pega o props
function Tarefa(props){
    // Estado inicial da tarefa
    const [concluir, setConcluir] = useState("A fazer");
    // Estado inicial da cor
    const [cor, setCor] = useState(false);

    // Função para concluir a tarefa
    function concluirTarefa(){
        // Mudar estado da tarefa para "Feito"
        setConcluir("Feito")
        // Mudar estado da cor para true
        setCor(true)
    }


    return(

        <>
        
    <section className="boxTarefa">
            {/* Imagem com a foto da tarefa */}
            <img className="imagemTarefa" src={props.foto}></img>
            {/* Título da tarefa */}
            <p className={cor ? "feitoTexto" : "aFazerTexto"}>{props.objetivo}</p>
            {/* Botão para concluir a tarefa */}
            <button className={cor ? "feito" : "aFazer"} onClick={(concluirTarefa)}>{concluir}</button>
    </section>
       
        </>
    )

}
// Exportando a função Tarefa como padrão
export default Tarefa;