import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Header from "../../components/header/index"
import imageBanner from "../../images/me-main.png";
import imageAbout from "../../images/me-about.png";
import handIcon from "../../images/waving_hand.svg"
import Footer from "../../components/footer";
import TextTitle from "../../components/text-title";
import SkillCard from "../../components/skill-card";
import "./style.css";

function Home() {
    return (
        <>
            <Header currentPage="home" />
            <section id="banner-container">
                <div id="banner">
                    <div id="banner-title">
                        <div class="ellipse-blur blur-top"></div>
                        <h1 id="presentation-title">Olá! Meu Nome é Matheus</h1>
                        <h2 id="presentation-subtitle">Desenvolvedor Fullstack Júnior</h2>
                    </div>
                    <div id="image-container">
                        <img id="main-img" src={imageBanner} alt="" width={550} height={550} />
                    </div>
                </div>
            </section>

            <section id="about-container">
                <div id="about-wrapper">
                    <img id="about-img" src={imageAbout} alt="" />
                    <div id="about-text">
                        <TextTitle title="Sobre Mim" />
                        <p>Meu nome é Matheus Souza Silva, tenho 20 anos, nasci em São Paulo, sou um entusiasta em programação.
                            Comecei meus estudos no curso técnico de Análise de Desenvolvimento de Sistemas do SENAI em 2019,
                            desde então venho me especializando em programação Back-End (em .NET e Node.js), mas também adoro Front-End rsrs. <br /><br />

                            Atualmente estou trabalhando na área como Analista em Desenvolvimento de Sistemas Fullstack Júnior. <br /><br />

                            Quer saber mais? <Link to="/about">Clique aqui!</Link> <motion.img animate={{ rotate: [0, -30, 0, -30, 0, 0, -30, 0, -30, 0] }}
                                transition={{
                                    duration: 1.5,
                                    ease: "easeInOut", 
                                    repeat: Infinity,
                                    repeatDelay: 1
                                }} src={handIcon} alt="" srcset="" />
                        </p>
                    </div>
                </div>
                <div class="ellipse-blur blur-bottom"></div>
            </section>

            <SkillCard />
            <Footer />
        </>
    );
}

export default Home;