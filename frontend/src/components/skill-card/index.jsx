import React, { useState } from "react";
import { motion } from "framer-motion";

import TextTitle from "../text-title";
import Tag from "../tag";

import nodejs from "../../images/nodejs.png"
import react from "../../images/react.png"
import sql from "../../images/sql.png"
import csharp from "../../images/csharp.png"
import htmlcssjs from "../../images/html-css-js.png"
import arrowIcon from "../../images/arrow.svg";

import "./style.css";

const variants = {
    open: { rotate: 360 },
    closed: { rotate: 180 },
}

const SkillCard = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id="skills-container">
            <TextTitle title="Principais Competências" />
            <motion.div transition={{ layout: { type: "spring" } }} layout id="skills-box">
                <motion.div layout="position" id="skills-icons">
                    <motion.img layout="position" className="skill-icon react" src={react} alt="React" />
                    <motion.img layout="position" className="skill-icon nodejs" src={nodejs} alt="Nodejs" />
                    <motion.img layout="position" className="skill-icon " src={htmlcssjs} alt="HTML, CSS e Javascript" />
                    <motion.img layout="position" className="skill-icon" src={csharp} alt="Csharp" />
                    <motion.img layout="position" className="skill-icon" src={sql} alt="SQL" />
                </motion.div>
                <motion.img
                    animate={isOpen ? "open" : "closed"}
                    transition={{ duration: 0.3 }}
                    variants={variants}
                    layout="position"
                    src={arrowIcon} alt="" onClick={() => setIsOpen(!isOpen)} />

                {isOpen &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="skills-open"
                    >
                        <div>
                            <h3>Outras Competências</h3>

                            <div className="tags-container">
                                <Tag text="Git" type="primary" />
                                <Tag text="API RESTful" type="secondary" />
                                <Tag text="ASP .NET CORE" type="primary" />
                                <Tag text="Microsserviços" type="secondary" />
                                <Tag text="Metodologia Scrum" type="primary" />
                                <Tag text="GCP" type="secondary" />
                                <Tag text="MVC" type="primary" />
                            </div>
                        </div>
                    </motion.div>}
            </motion.div>
        </section>
    );
}

export default SkillCard;