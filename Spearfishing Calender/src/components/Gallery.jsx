import React from "react";


function Gallery(props){

    function handleClick(event){
        const {name} = event.target;
        console.log("clicked! - ",name);
    }

    return(
        <article key={props.id} id={props.id} className="grid-gallery">
            <h1>Caught by {props.name}</h1>
            <p>{props.date}</p>
            <img className="gallery-img" src={props.imgSrc} alt={props.name&props.date} /> 
            <button className="read-more" name={props.name} onClick={handleClick}>See more</button>
        </article>
    )
}

export default Gallery;