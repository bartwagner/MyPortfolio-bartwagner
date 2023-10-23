import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

export default function AppRoutes(){
    return(
            <Routes>
                <Route path="/" element={ <Home /> } ></Route>
                <Route path="/AboutMe" element={ <AboutMe /> } ></Route>
                <Route path="/Experience" element={ <Experience /> } ></Route>
                <Route path="/Projects" element={ <Projects /> } ></Route>
                <Route path="/Skills" element={ <Skills /> } ></Route>
                <Route path="/Contact" element={ <Contact /> } ></Route>
            </Routes>
    )
}