import React, { useEffect } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi"
import { Link } from "react-router-dom"

import Button from "../button";
import "./style.css"

function Header(props) {
    return (
        <nav>
            <div className="header full-length">
                <div id="options">
                    <Link to="/" className={props.currentPage === "home" ? "option active" : "option"}>Home</Link>
                    <Link to="/about" className={props.currentPage === "about" ? "option active" : "option"}>Sobre Mim</Link>
                    <Link to="/contact" className={props.currentPage === "contact" ? "option active" : "option"}>Entre em Contato</Link>
                </div>
                <Button style="primary-large" name="Meu Currículo" />
            </div>

            <div className="header small-length">
                <HiOutlineMenuAlt2 className="menu" />
            </div>
        </nav>
    );
}

export default Header;