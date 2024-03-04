import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <>
            <h1>NavBar</h1>
            <Link to="/">Home</Link>
            <Link to="/contacto">Contactos</Link>

        </>
    )

}