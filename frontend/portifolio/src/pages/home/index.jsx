import React from "react";
import Header from "../../components/header/index"
import "./style.css"
import image from "../../images/me-main.png";

function Home() {
    return (
        <div>
            <Header currentPage="home" />
            <div id="banner-container">
                <div id="banner">
                    <div id="banner-title">
                        <span className="ellipse-blur"></span>
                        <h1 id="presentation-title">Olá! Meu Nome é Matheus</h1>
                        <h2 id="presentation-subtitle">Desenvolvedor Fullstack Júnior</h2>
                    </div>
                    <div id="image-container">
                        <img id="main-img" src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;