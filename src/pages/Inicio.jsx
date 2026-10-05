import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

function Inicio() {
    const logo = '../logo.png'

    return (
        <div className="inicio bg-light d-flex flex-column justify-content-center align-items-center vh-100">
            <Image 
                src = {logo}
                fluid
                style = {{
                    position: 'relative',
                    width: '250px',
                    height: '250px',
                    
                }}   
            />
            <h1 className = "d-block text-center justify-content-center align-items-center display-4">
                Bienvenido a StarPoint
            </h1>
            <p className = "text-center">Tu tienda online de videojuegos</p>
            <div className = "text-center">
                <Link to="/productos" className="btn btn-primary">Ver Catálogo</Link>
            </div>
            <div>
                <p className = "d-block text-center dipslay-4 mt-4">Somos StartPoint una página web con un catálogo de videojuegos</p> 
                <p className = "d-block text-center dipslay-4 mb-1">Estamos aqui para brindarte la información necesaria para empezar tu próximo juego</p>
            </div>
        </div>
    );
}

export default Inicio;
