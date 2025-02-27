import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Tarefas from "./pages/ListadeFazeres"

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tarefas' element={<Tarefas/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
