import React from "react";

function Card (props) {
    return (
        <div className="card">
            <div className="h2"> {props.heading} </div>
                heading={props.heading}
                description={props.description}
                img={props.img}
                button={props.button}>
        </div>
    )
}

export default Card;