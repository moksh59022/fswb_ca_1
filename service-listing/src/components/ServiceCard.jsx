import React from "react";

function ServiceCard(props){
    return(
        <div className="card">
            <div><h1>{props.title}</h1></div>
            <div> <p>{props.description}</p></div>
           
        </div>
    )
}

export default ServiceCard