import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Inicio from './pages/Inicio.jsx'
import Productos from './pages/Productos.jsx'
import DetalleProducto from './pages/DetalleProducto.jsx'
import Carrito from './pages/Carrito.jsx'
import Contacto from './pages/Contacto.jsx'
import NavBar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'


function App() {
    const [carrito, setCarrito] = useState([])

    const [busqueda, setBusqueda] = useState('')

    const agregarAlCarrito = (juego) => {
    setCarrito([...carrito, juego]);
    alert(`${juego.nombre} se sumó al carrito.`);
    };

    const sacarDelCarrito = (juego) => {
        setCarrito(carrito.filter(j => j.id !== juego.id))
    }

    return (
        <div className="min-vh-100 d-flex flex-column bg-light">
                <NavBar buscar={setBusqueda}/>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/productos/" element={<Productos productosCarrito={carrito} funcionAgregar={agregarAlCarrito} textoBuscar={busqueda} />} />
                    <Route path="/producto/:id" element={<DetalleProducto productosCarrito={carrito} funcionAgregar={agregarAlCarrito}/>} />
                    <Route path="/carrito" element={<Carrito productosCarrito={carrito} funcionSacar={sacarDelCarrito} />} />
                    <Route path="/contacto" element={<Contacto />} />
                </Routes>
                <Footer />
        </div>
    )
}
export default App
