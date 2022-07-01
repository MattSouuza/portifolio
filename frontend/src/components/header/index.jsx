import React from "react";
import Button from "../button";
import "./style.css"

function Header(props) {
    return (
        <nav>
            <div id="options">
                <p className={props.currentPage === "home" ? "option-active" : "option"}>Home</p>
                <p className={props.currentPage === "sobre mim" ? "option-active" : "option"}>Sobre Mim</p>
                <p className={props.currentPage === "entre em contato" ? "option-active" : "option"}>Entre em Contato</p>
            </div>
            <Button style="primary-large" name="Meu Currículo" />
        </nav>
    );
}

export default Header;