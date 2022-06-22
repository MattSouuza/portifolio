import React from "react";
import "./style.css"

function Button(props) {
    return(
        <button className={props.style} type={!props.type? "button" : props.type}>{props.name}</button>
    );
}

export default Button;