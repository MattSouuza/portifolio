import React from "react";
import "./style.css";

const TextTitle = (props) => {
    return (
        <div id="text-title">
            <h3>{props.title}</h3>
            <div>
                <hr className="title-line" />
            </div>
        </div>
    );
}

export default TextTitle;