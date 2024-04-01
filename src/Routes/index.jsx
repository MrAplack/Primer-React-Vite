import { Routes as ArbolRutas, Route } from "react-router-dom";
import Home from "../Pages/Home"
import Contact from "../Pages/Contact"
import NotFound from "../Pages/NotFound"
import NavBar from "../Components/NavBar";
import MyAPITest from "../Pages/MyAPITest";

export default function MyRoutes() {

    return (
        <>



            <NavBar />

            <div className="container">



                <ArbolRutas>
                    <Route path="/" element={<Home />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/API" element={<MyAPITest />} />
                    <Route path="*" element={<NotFound />} />
                </ArbolRutas>

            </div>

        </>

    )

}