import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ValoresGrupo from "./pages/Valores"

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/valores" element={<ValoresGrupo/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
