import "./output.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './pages/Navbar.jsx'
import Home from './pages/Home.jsx'
import Dragdrop from './pages/drag&drop/dragdrop.jsx'
import Card from "./pages/Card.jsx"

function App() {
  return (
    <>
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/explore" element={<Dragdrop />}></Route>
          </Routes>
      </Router> */}
      <Navbar/>
      {/* <Home/> */}
      {/* <Card/> */}
      <Dragdrop/>
    </>
  )
}

export default App
