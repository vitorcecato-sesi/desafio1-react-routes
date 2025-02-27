import "./styles/ListadeFazeres.css" 
import Tarefa from "./Tarefa"

function ListaTarefas () {

    return (
        <>
         
         <section className="container-Lista" >
        <h1>Tarefas do dia no Senai </h1>
         <Tarefa
         foto = "https://www.shutterstock.com/image-photo/child-diligently-making-bed-clean-600nw-2428456793.jpg"
         objetivo = "Chegar na escola"
         />

        <Tarefa
         foto = "https://png.pngtree.com/thumb_back/fh260/background/20230322/pngtree-the-man-showing-thumbs-up-washing-dishes-man-showing-thumbs-up-photo-image_2009189.jpg"
         objetivo = "ir no banheiro "
         />

        <Tarefa
         foto = "https://i5.walmartimages.com/asr/03ab1f38-a4e7-416b-a2f7-c7d99dd6b90e.c0176c50c9563c52426010843e26c54b.jpeg"
         objetivo = "Ir beber água"
        />

        <Tarefa
         foto = "https://portal6.com.br/wp-content/uploads/2022/04/chao.jpg"
         objetivo = "Entrar na sala de aula"
         />

         <Tarefa
         foto = "https://d1muf25xaso8hp.cloudfront.net/https://img.criativodahora.com.br/2024/02/criativo-65c445d35938cMDgvMDIvMjAyNCAwMGgwOQ==.jpg?w=1000&h=&auto=compress&dpr=1&fit=max"
         objetivo = "Pegar seu computador e o carregador"
         />

        <Tarefa
         foto = "https://www.cirurgiaestetica.com.br/wp-content/uploads/2020/06/ookok.jpg.webp"
         objetivo = "Começar a participar da aula"
         />
         </section>

        </>
    )

}

export default ListaTarefas