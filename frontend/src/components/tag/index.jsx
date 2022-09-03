import React from "react";
import "./style.css";

const Tag = (props) => {
    return (
        <div className={"tag-body " + props.type}>
            <p>{props.text}</p>
        </div>
    );
}

export default Tag;