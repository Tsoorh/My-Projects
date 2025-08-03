import { useState } from "react";
import React, { useEffect } from "react";

function Gallery(props) {
  const [displaySetting, setdisplaySrc] = useState({
    img: props.imgSrc,
    name: props.name,
    date: props.date,
  });
  const [fadeToggle, setFadeToggle] = useState("fade-in");

  useEffect(() => {
    setFadeToggle("fade-out");

    const fadeInTimer = setTimeout(() => {
      setdisplaySrc({ img: props.imgSrc, name: props.name, date: props.date });
      setFadeToggle("fade-in");
    }, 800);

    return () => clearTimeout(fadeInTimer);
  }, [props.imgSrc]);

  function handleClick(event) {
    const { name } = event.target;
    console.log("clicked! - ", name);
  }

  return (
    <article key={props.id} id={props.id} className="grid-gallery ">
      <h3>Caught by {props.name}</h3>
      <p>{props.date}</p>
      <img
        className={`gallery-img ${fadeToggle}`}
        src={displaySetting.img}
        alt={`${displaySetting.name} ${displaySetting.date}`}
      />
      <button className="read-more" name={props.name} onClick={handleClick}>
        See more
      </button>
    </article>
  );
}

export default Gallery;
