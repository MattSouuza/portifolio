import React from "react";
import githubIcon from "../../images/github.svg";
import linkedinIcon from "../../images/linkedin.svg";
import arrowIcon from "../../images/arrow.svg";
import heartIcon from "../../images/heart.svg";
import "./style.css"

const Footer = () => {
    return (
        <footer>
            <hr />
            <div id="footer-container">
                <div id="social-media">
                    <a href="https://github.com/MattSouuza">
                        <img className="icon" alt="" srcset={githubIcon} />
                    </a>
                    <a href="https://www.linkedin.com/in/matheus-souza-silva-148492198/">
                        <img className="icon" alt="" srcset={linkedinIcon} />
                    </a>
                </div>

                <div id="credits">
                    <p>Feito com </p><img id="love" alt="Amor" srcset={heartIcon} />
                </div>

                <div id="button-up">
                    <a href="#">
                        <img className="icon arrow" alt="" srcset={arrowIcon} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;