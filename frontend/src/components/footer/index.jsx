import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { MdKeyboardArrowUp } from "react-icons/md";

import heartIcon from "../../images/heart.svg";
import "./style.css"

const Footer = () => {
    return (
        <footer>
            <hr />
            <div id="footer-container">
                <div id="social-media">
                    <a href="https://github.com/MattSouuza">
                        <AiFillGithub className="icon"/>
                    </a>
                    <a href="https://www.linkedin.com/in/matheus-souza-silva-148492198/">
                        <AiFillLinkedin className="icon"/>
                    </a>
                </div>

                <div id="credits">
                    <p>Feito com </p><img id="love" alt="Amor" srcset={heartIcon} />
                </div>

                <div id="button-up">
                    <a href="#">
                        <MdKeyboardArrowUp className="icon arrow"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;