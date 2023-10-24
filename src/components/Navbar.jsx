import React from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="nav-menu">
            <img src="./src/images/logo.jpg" className="nav-logo" />
            <div className="nav-div-par">
                <p className="nav-par">Welcome to my Website</p>
                <p className="nav-par">by Wagner Araujo</p>
            </div>
            <div className="nav-link">
                <ul className="link-ul">
                    <Link className="link" to="/"><li>Home</li></Link>
                    <Link className="link" to="/AboutMe"><li>About Me</li></Link>
                    <Link className="link" to="/Experience"><li>Experience</li></Link>
                    <Link className="link" to="/Projects"><li>Projects</li></Link>
                    <Link className="link" to="/Skills"><li>Skills</li></Link>
                    <Link className="link" to="/Contact"><li>Contact</li></Link>
                </ul>
            </div>
        </nav>
    )
}