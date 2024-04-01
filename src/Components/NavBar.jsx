import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <>
        <hr/>
        <div className="navbar">
            <h1>Barra de Navegacion</h1>

            <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/Contact">Contactos</Link>
            <Link to="/API">API</Link>
            <hr />
            </div>

            </div>

        </>
    )

}