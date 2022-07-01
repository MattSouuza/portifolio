import React from "react";
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
        <div>
            <Header currentPage="home" />
            <section id="banner-container">
                <div id="banner">
                    <div id="banner-title">
                        <span class="ellipse-blur ellipse-blur-top"></span>
                        <h1 id="presentation-title">Olá! Meu Nome é Matheus</h1>
                        <h2 id="presentation-subtitle">Desenvolvedor Fullstack Júnior</h2>
                    </div>
                    <div id="image-container">
                        <img id="main-img" src={imageBanner} alt="" />
                    </div>
                </div>
            </section>

            <section id="about-container">
                <div id="about-image-container">
                    <img id="about-img" src={imageAbout} alt="" />
                </div>
                <div id="about-content">
                    <div id="about-text">
                        <TextTitle title="Sobre Mim" />
                        <p>Meu nome é Matheus Souza Silva, tenho 20 anos, nasci em São Paulo, sou um entusiasta em programação.
                            Comecei meus estudos no curso técnico de Análise de Desenvolvimento de Sistemas do SENAI em 2019,
                            desde então venho me especializando em programação Back-End (em .NET e Node.js), mas também adoro Front-End rsrs. <br /><br />

                            Atualmente estou trabalhando na área como Analista em Desenvolvimento de Sistemas Fullstack Júnior. <br /><br />

                            Quer saber mais? <a href="">Clique aqui!</a> <img src={handIcon} alt="" srcset="" />
                        </p>
                        <span class="ellipse-blur ellipse-blur-bottom"></span>
                    </div>
                </div>
            </section>

            <SkillCard />
            <Footer />
        </div>
    );
}

export default Home;