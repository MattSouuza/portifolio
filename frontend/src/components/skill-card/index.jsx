import React, { useState } from "react";
import TextTitle from "../text-title";
import nodejs from "../../images/nodejs.png"
import react from "../../images/react.png"
import sql from "../../images/sql.png"
import csharp from "../../images/csharp.png"
import htmlcssjs from "../../images/html-css-js.png"
import arrowIcon from "../../images/arrow.svg";
import "./style.css";

const SkillCard = () => {
    const { isOpen, setIsOpen } = useState(true);

    return (
        <section id="skills-container">
            <TextTitle title="Principais Competências" />
            <div id="skills-box">
                <div id="skills-icons">
                    <img className="skill-icon nodejs" src={nodejs} alt="Nodejs" />
                    <img className="skill-icon" src={csharp} alt="Csharp" />
                    <img className="skill-icon" src={htmlcssjs} alt="HTML CSS e Javascript" />
                    <img className="skill-icon" src={sql} alt="SQL" />
                    <img className="skill-icon react" src={react} alt="React" />
                </div>
                <img src={arrowIcon} alt="" onClick={() => setIsOpen(!isOpen) } />
            </div>
            {isOpen && <div>
                TEXTP
            </div>}
        </section>
    );
}

export default SkillCard;