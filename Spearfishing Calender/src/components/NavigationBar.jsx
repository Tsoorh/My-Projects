import React, { useState } from "react";
import NavBarList from "./NavBarList";
import sections from "../data/sections";

function NavigationBar(props) {

  function onHandleClick(event) {
    const { name } = event.target;
    console.log("navbar clicked - ", name);
  }

  const navClasses = props.isOpen ? "navbar open-navbar  grid-navigation":"navbar grid-navigation"
  
  return (
    <nav className= {navClasses} >
        <ul>
          {sections.map((section) => {
            return (
              <NavBarList
                key={section.name}
                name={section.name}
                title={section.title}
                onHandleClick={onHandleClick}
                icon={section.icon}
                />
            );
          })}
        </ul>
        <p className="copyright">©Tsoor Hartov</p>
      </nav>
  );
}

export default NavigationBar;