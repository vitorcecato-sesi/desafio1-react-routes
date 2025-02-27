import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Professores from './pages/SENAI'

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobreosprofessores' element={<Professores/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
