import React, { useState } from "react";
import './style.css';
import { Link } from 'react-scroll';

function Header() {
    const[click, setClick] = useState(false);
    const closeMenu = () => setClick(false)
    return (
        <div>
            <header className="header">
                <a href="#accueil" className="logo">Manja
                    <span>Florida</span>
                </a>

                <nav className="navbar">
                    <ul className={click ? "nav-menu" : "nav-menu"}>
                        <li className="nav-item">
                            <Link className="link" to="/" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="link" to="apropos"  spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu} >Apropos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="link" to="projets" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}>Skils</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="link" to="contact" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu} >Projets</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="link" to="contact" spy={true} smooth={true} offset={-150} duration={500} onClick={closeMenu} >Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>

        </div>
    )
}

export default Header;