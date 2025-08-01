import React from "react";


function PageTemplate(props){

    function handleClick(event){
        const {name} = event.target;
        console.log("clicked! - ",name);
    }

    return(
        <article key={props.name} id={props.name}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button className="read-more" name={props.name} onClick={handleClick}> {props.buttonDescription}</button>
        </article>
    )
}

export default PageTemplate;