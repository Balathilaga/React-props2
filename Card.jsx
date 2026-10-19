import React from "react";

function Card ({title,footer,children}){
    return(
        <div className="Card">
            <div >{title}</div>
            <div className="card-content">{children}</div>
            <div className="card-footer">{footer}</div>
           
        </div>
    );

}
export default Card