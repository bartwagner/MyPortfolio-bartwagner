import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home /> } ></Route>
                <Route path="/" element={ <AboutMe /> } ></Route>
            </Routes>
        </BrowserRouter>
    )
}