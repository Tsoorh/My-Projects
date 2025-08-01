import React,{useState} from "react";
import logo from "../assets/img/logo-regular-fish.png";
import MenuIcon from "@mui/icons-material/Menu";

function Header(props) {
  const pages = ["Login", "Register", "Chat"];
  
  function clickToNav(event) {
    const { name } = event.target;
    console.log("Nav to -", name);
  }
  function onHandleMenu() {
    console.log("open/close");
    props.onOpen();
  }

  return (
    <header className="grid-header">
      <div className="logo-menu">
        <div className="menu" onClick={onHandleMenu}>
          <MenuIcon className="menu-icon"/>
        </div>
        <img src={logo} alt="Logo" onClick={clickToNav} name="Home page" />
      </div>
      <div>
        {pages.map((page) => {
          return (
            <a
              className="header-nav"
              key={page}
              onClick={clickToNav}
              name={page}
            >
              {page}
            </a>
          );
        })}
      </div>
    </header>
  );
}

export default Header;
