import { Routes as ArbolRutas, Route } from "react-router-dom";
import Home from "../Pages/Home"
import Contact from "../Pages/Contact"
import NotFound from "../Pages/NotFound"
import NavBar from "../Components/NavBar";

export default function MyRoutes() {

    return (
        <>



            <NavBar />



            <ArbolRutas>
                <Route path="/" element={<Home />} />
                <Route path="/contactos" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </ArbolRutas>

        </>

    )

}