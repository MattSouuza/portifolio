import React from "react";

import Header from "../../components/header";
import TextTitle from "../../components/text-title";

import backgroundImage from "../../images/me-about-page.png"

import "./style.css";


const About = () => {
    return (
        <>
            <Header currentPage="about" />

            <div id="side-image">
                <img src={backgroundImage} alt="" srcset="" />
                <div class="shadow"></div>
            </div>

            <section id="about">
                <div id="text">
                    <TextTitle title="Sobre Mim" />
                    <p>
                        Prazer! Meu nome é <b>Matheus Souza Silva</b>, tenho 20 anos, nasci e moro na cidade de São Paulo.
                    </p>
                    <p>
                        Desde sempre tive interesse em tecnologia, aos 17 anos, por sugestão do meu irmão, ingressei no <b>curso técnico de Analise e Desenvolvimento de Sistemas na Escola SENAI de Informática</b>. Foi aí que tive o primeiro contato com o mundo da programação, gostei muito da área, então decidi que era o que eu queria seguir.
                    </p>
                    <p>
                        Atualmente estou trabalhando como <b>Analista em Desenvolvimento de Sistemas Fullstack Júnior</b>, e venho aprofundando meus conhecimentos, principalmente em NodeJs.
                    </p>
                </div>
                <div class="ellipse-blur blur-top"></div>
            </section>

        </>
    );
}

export default About;