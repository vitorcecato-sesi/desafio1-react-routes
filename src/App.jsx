import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Tarefas from "./pages/ListadeFazeres"
import ValoresGrupo from "./pages/Valores"
import SobreNos from './pages/SobreNos'

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tarefas' element={<Tarefas/>}/>
        <Route path="/valores" element={<ValoresGrupo/>} />
        <Route path='/sobrenos' element={<SobreNos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
